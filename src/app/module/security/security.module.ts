import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, LogonComponent]
})
export class SecurityModule { }
