import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { ThemeModule } from './theme/theme.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ThemeModule, UiModule, FormsModule, AuthModule],
  exports: [ThemeModule, UiModule, FormsModule],
})
export class SharedModule {}
