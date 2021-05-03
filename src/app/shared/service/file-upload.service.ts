import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  public Upload(data){
    if (data.length === 0) {
      return;
    }
    let fileToUpload = <File>data[0];
    const formData = new FormData();
    let filename=fileToUpload.name+new Date().toLocaleTimeString()
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.authService.APPSERVER+'/Upload/UploadFile', formData)
  }
}


