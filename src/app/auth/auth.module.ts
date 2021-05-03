import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserAddComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AuthModule { }
