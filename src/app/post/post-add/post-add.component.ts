import { Component, EventEmitter, Injectable, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Validators, Editor, Toolbar } from "ngx-editor";
import jsonDoc from "../../post/customeditor/doc";
import {schema} from "ngx-editor";
import plugins from "../plugin";
import nodeViews from "../nodeviews";
import { FileUploadService } from "src/app/shared/service/file-upload.service";
import { CategoryService } from "src/app/shared/service/category.service";
import { Post } from "src/app/model/post";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PostAddComponent implements OnInit, OnDestroy {
  html='';
  editordoc = jsonDoc;
  public progress: number;
  public message: string;
  public filename:string;
  public lstCategory=[]
  public post:Post=new Post();
  @Output() public onUploadFinished = new EventEmitter();

  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  form = new FormGroup({
    editorContent: new FormControl(jsonDoc, Validators.required())
  });

  get doc(): AbstractControl {
    return this.form.get("editorContent");
  }
  constructor(private upload: FileUploadService,private categoryService:CategoryService){

  }

  ngOnInit(): void {
this.categoryService.getCategory().subscribe((res:any)=>{
  this.lstCategory=res.data
})

    this.editor = new Editor({
      schema,
      plugins,
      nodeViews
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  save(res:any){
    console.log(this.html)

  }

  public uploadFile = (files) => {
    
    this.upload.Upload(files).subscribe(event => {
        console.log(event)
        }
      );
  }
}
