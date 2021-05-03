import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
public lstCategory=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.lstCategory=res.data;
    })
  }

}
