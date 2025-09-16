import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Comment {
  id?: number;
  author: string;
  content: string;

}

export interface Post {
  id?: number;
  title: string;
  content: string;
  author: string;
  comments?: Comment[];
}
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

 private baseUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  // Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  searchPosts(keyword: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/search?keyword=${keyword}`);
  }

  // Comments
  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${postId}/comments`);
  }

addComment(postId: number, author: string, content: string): Observable<Comment> {
  return this.http.post<Comment>(`${this.baseUrl}/${postId}/comments`, {
    author,
    content
  });
}


  deleteComment(postId: number, commentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${postId}/comments/${commentId}`, { responseType: 'text' });
  }
}
