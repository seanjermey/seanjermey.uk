import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { Auth } from '../auth.type';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showModal = false;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const { value, invalid } = this.form;

    if (invalid) {
      return;
    }

    this.authService
      .login(value.username, value.password)
      .pipe(
        tap((auth: Auth) => {
          this.form.reset();
          this.showModal = false;
        })
      )
      .subscribe(noop);
  }
}
