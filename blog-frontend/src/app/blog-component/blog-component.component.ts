import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogServiceService, Post, Comment } from '../service/blog-service.service';

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss']
})
export class BlogComponentComponent implements OnInit {
  posts: Post[] = [];
  selectedPost: Post | null = null;

  // Form inputs
  newPost: Post = { title: '', content: '', author: '' };
  newCommentAuthor: string = '';
  newCommentContent: string = '';

  // Alerts
  alertMessage: string = '';
  alertType: 'success' | 'error' | '' = '';

  constructor(private blogService: BlogServiceService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  showAlert(message: string, type: 'success' | 'error') {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = '';
      this.alertType = '';
    }, 4000); // auto dismiss after 4s
  }

  loadPosts(): void {
    this.blogService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        console.log('Failed to load posts. Please try again later.', 'error');
      }
    });
  }

  selectPost(post: Post): void {
    this.selectedPost = post;
    this.blogService.getComments(post.id!).subscribe({
      next: (comments) => {
        this.selectedPost!.comments = comments;
      },
      error: () => {
        console.log('Could not fetch comments for this post.', 'error');
      }
    });
  }

  addPost(): void {
    if (!this.newPost.title || !this.newPost.content || !this.newPost.author) {
      console.log('All fields are required for a post.', 'error');
      return;
    }

    this.blogService.addPost(this.newPost).subscribe({
      next: (post) => {
        this.posts.push(post);
        this.newPost = { title: '', content: '', author: '' }; // reset form
        console.log('Post created successfully (201).', 'success');
      },
      error: (err) => {
        if (err.status === 404) {
          console.log('API not found (404).', 'error');
        } else {
          console.log('Failed to add post.', 'error');
        }
      }
    });
  }

  deletePost(id: number): void {
    this.blogService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.id !== id);
        if (this.selectedPost?.id === id) this.selectedPost = null;
        console.log('Post deleted successfully.', 'success');
      },
      error: (err) => {
        console.log('Failed to delete post (maybe 404).', 'error');
      }
    });
  }

  addComment(): void {
    if (!this.newCommentAuthor.trim() || !this.newCommentContent.trim() || !this.selectedPost) {
      console.log('Both author and content are required for a comment.', 'error');
      return;
    }

    this.blogService.addComment(this.selectedPost.id!, this.newCommentAuthor, this.newCommentContent)
      .subscribe({
        next: (comment) => {
          this.selectedPost!.comments = [...(this.selectedPost!.comments || []), comment];
          this.newCommentAuthor = '';
          this.newCommentContent = '';
         if (comment) {
        console.log('Comment added successfully (200).', 'success');
      } else {
        console.log('Unexpected empty response from server.', 'warning');
      }
        },
        error: (err) => {
          if (err.status === 404) {
            console.log('Post not found for this comment (404).', 'error');
          } else {
            console.log('Failed to add comment.', 'error');
          }
        }
      });
  }

  deleteComment(commentId: number): void {
    if (!this.selectedPost) return;

    this.blogService.deleteComment(this.selectedPost.id!, commentId).subscribe({
      next: () => {
        this.selectedPost!.comments = this.selectedPost!.comments?.filter((c) => c.id !== commentId);
        console.log('Comment deleted successfully.', 'success');
      },
      error: () => {
        console.log('Failed to delete comment (maybe 404).', 'error');
      }
    });
  }
}
