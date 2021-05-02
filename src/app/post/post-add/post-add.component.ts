import { Component, EventEmitter, Injectable, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Validators, Editor, Toolbar } from "ngx-editor";
import {FileUploadService} from '../../../Service/file-upload.service'
import jsonDoc from "../../post/customeditor/doc";
import {schema} from "ngx-editor";
import plugins from "../plugin";
import nodeViews from "../nodeviews";

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
  constructor(private upload: FileUploadService){

  }

  ngOnInit(): void {
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
