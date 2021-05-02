import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: 'category-add',
    component: CategoryAddComponent
  },
  {
    path: 'category-edit/:id',
    component: CategoryAddComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
