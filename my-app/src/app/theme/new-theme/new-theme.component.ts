import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  newThemeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText, area } = form.value;
    this.apiService.createTheme(themeName, postText, area).subscribe(() => {
      this.router.navigate(['themes']);
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/themes');
  }
}
