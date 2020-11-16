import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UiModule } from '../shared/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  providers: [AuthService],
  imports: [CommonModule, UiModule, ReactiveFormsModule],
  exports: [LoginComponent, LogoutComponent],
})
export class AuthModule {}
