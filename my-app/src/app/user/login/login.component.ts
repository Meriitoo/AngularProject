import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ["", [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],

    password: ["", [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  login(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password }  = this.form.value;

    this.userService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/themes']);
    })
  }
}
