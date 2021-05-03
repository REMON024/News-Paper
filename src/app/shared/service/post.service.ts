import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,private authService:AuthService) { }


  savePost(formData) {
    return this.http.post(this.authService.APPSERVER + '/Post/AddPost', formData);
  }

  getPost() {
    return this.http.get(this.authService.APPSERVER + '/Post/GetPost');
  }

}
