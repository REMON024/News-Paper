import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';



const routes: Routes = [
  {
    path:'add',component:PostAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
