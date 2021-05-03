import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,private authService:AuthService) { }


  saveCategory(formData) {
    return this.http.post(this.authService.APPSERVER + '/Roles/AddRole', formData);
  }

  getCategory() {
    return this.http.get(this.authService.APPSERVER + '/Roles/GetRole');
  }

}
