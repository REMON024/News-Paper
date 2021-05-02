import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPortalLayoutComponent } from './new-portal-layout/new-portal-layout.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



@NgModule({
  declarations: [
    NewPortalLayoutComponent,
    NewsHomeComponent,
    NewsCategoryComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsPortalModule { }
