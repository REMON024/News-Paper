import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.module').then(
        (m) => m.PostModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
