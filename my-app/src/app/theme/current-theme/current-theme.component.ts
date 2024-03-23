import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {

  theme: Theme | undefined;
  commentText: string = '';

  constructor(private apiService: ApiService, 
              private activatedRoute: ActivatedRoute, 
              private userService: UserService,
              private router: Router) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getTheme(id).subscribe(theme => {
      this.theme = theme;
      console.log(theme);
    });
  }

  postComment(): void {
    if (!this.theme || !this.commentText) {
      return;
    }

    const themeId = this.theme._id;
    this.apiService.createPost(themeId, this.commentText).subscribe(updatedTheme => {
      this.theme = updatedTheme;
      this.commentText = ''; 

      const url = `/themes/${themeId}`;
      this.router.navigateByUrl(url);
      this.fetchTheme();
     
    });
  }
}
