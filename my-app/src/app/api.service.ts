import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
import { Observable } from 'rxjs';
import { winnerUser } from './types/winnerUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`)
  }

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`)
  }

  createTheme(
    themeName: string,
    postText: string,
    area: string,
  ) {
    return this.http.post<Theme>('/api/themes', { themeName, postText, area });
  }

  createPost(themeId: string, postText: string): Observable<any> {
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText });
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url)
  }

  updatePost(postId: string, postText: string): Observable<Post> {
    const url = `/api/posts/${postId}`;
    return this.http.put<Post>(url, { postText });
  }
  subscribe(themeId: string, userId: string): Observable<any> {
    return this.http.put(`/api/themes/${themeId}`, { userId });
  }

  getAllLocation() {
    const { apiUrl } = environment;
    return this.http.get(`${apiUrl}/location/getAll`)
  }

  setDelete(data: any) {
    const { apiUrl } = environment;
    return this.http.delete(`${apiUrl}/location/remove` + "/" + data._id);
  }

  UpdateRecords(currentLocationID: string, bodyData: {}) {
    const { apiUrl } = environment;
    return this.http.patch(`${apiUrl}/location/update` + "/" + currentLocationID, bodyData);
  }

  register(bodyData: {}) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/location/create`, bodyData);

  }

  registerWinner(bodyData: {}) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/winners/create`, bodyData);

  }


}