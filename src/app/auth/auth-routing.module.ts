import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-edit/:id',
    component: UserAddComponent
  },
  {
    path: 'user-list',
    component: UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
