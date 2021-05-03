import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
public category:Category=new Category();
    constructor(private categoryService:CategoryService,private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.categoryService.saveCategory(this.category).subscribe(res=>{
      if(res){
        this.router.navigate(['/category/category-list']);
      }
    })
  }

}
