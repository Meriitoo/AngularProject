import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoading: boolean = true;
  isSubscribed: { [themeId: string]: boolean } = {};

  user: any;

  constructor(private api: ApiService, private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      console.log(themes);
      this.themes = themes;
      this.updateSubscriptionStatus(); 
      this.isLoading = false;
    });
  }

  subscribeToTheme(themeId: string): void {
    if (!this.userService.isUserSubscribedToTheme(themeId)) {
      const userId = this.userService.getCurrentUserId();
      if (userId) {
        this.api.subscribe(themeId, userId).subscribe(() => {
          console.log('Subscribed to theme:', themeId, 'User', userId);
          this.userService.updateUserSubscribedThemes(themeId);
          this.isSubscribed[themeId] = true; 
        }, error => {
          console.error('Error subscribing to theme:', error);
        });
      }
    } else {
      console.log('User is already subscribed to theme:', themeId);
      this.isSubscribed[themeId] = true; 
    }
  }

  updateSubscriptionStatus(): void {
    const userId = this.userService.getCurrentUserId();
    if (userId) {
      this.themes?.forEach(theme => {
        this.isSubscribed[theme._id] = this.isUserInSubscribersList(userId, theme.subscribers);
      });
    }

    this.api.getThemes();
  }

  isUserInSubscribersList(userId: string, subscribers: string[]): boolean {
    return subscribers.includes(userId);
  }
}
