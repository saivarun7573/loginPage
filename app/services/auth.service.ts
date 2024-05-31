import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://ap.greatfuturetechno.com';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login/`, { username, password });
  }

  logout() {
    // Implement logout functionality if required
  }
}
