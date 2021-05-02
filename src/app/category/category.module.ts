import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    CategoryAddComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
