import { Injectable, OnDestroy } from '@angular/core';
import { ourUser } from '../types/ourUser';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Theme } from '../types/theme';
import { Post } from '../types/post';
import { winnerUser } from '../types/winnerUser';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<ourUser | undefined>(undefined); //subject
  public user$ = this.user$$.asObservable(); //observable

  private post$$ = new BehaviorSubject<Post | undefined>(undefined);
  public post$ = this.post$$.asObservable();

  user: ourUser | undefined;
  USER_KEY = '[user]';
  post: Post | undefined;
  POST_KEY = '[post]'

  get isLogged(): boolean {
    return !!this.user; 
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user; //setting the this user ->   user: ourUser | undefined;
    });
    this.subscription = this.post$.subscribe((post) => {
      this.post = post;
    })
  }

  login(email: string, password: string) {
    return this.http
      .post<ourUser>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user))); 
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string) {

    return this.http.post<ourUser>('/api/register', { username, email, password, rePassword, tel, })
      .pipe(tap((user) => this.user$$.next(user))); 
  }

  logout() {
    this.user = undefined;
    return this.http
      .post<ourUser>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http.get<ourUser>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user))); 
  }

  updateProfil(
    username: string,
    email: string,
    tel?: string,

  ) {
    return this.http.put<ourUser>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getCurrentUserId(): string | undefined {
    const user = this.user$$.getValue(); 
    return user?._id; 
  }

  updateUserSubscribedThemes(themeId: string): void {
    const userId = this.getCurrentUserId();
    if (userId) {
      const user = this.user$$.getValue(); 
      if (user) {
        console.log('Before updating themes:', user.themes); 
        if (!user.themes) {
          user.themes = []; 
        }
        user.themes.push(themeId); 
        console.log('After updating themes:', user.themes); 
        this.user$$.next(user); 
      }
    }
  }

  isUserSubscribedToTheme(themeId: string): boolean {
    const user = this.user$$.getValue();
    return !!user && !!user.themes && user.themes.includes(themeId);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
