import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './post-add/post-add.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomeditorComponent } from './customeditor/customeditor.component';
import { FileUploadService } from '../shared/service/file-upload.service';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [PostAddComponent, PostListComponent,CustomeditorComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],providers:[FileUploadService],
  bootstrap: [ AppComponent ]

})
export class PostModule { }
