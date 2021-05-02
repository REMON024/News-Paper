import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private authService:AuthService) { }


  // comparePasswords(fb: FormGroup) {
  //   let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //   //passwordMismatch
  //   //confirmPswrdCtrl.errors={passwordMismatch:true}
  //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //     if (fb.get('Password').value != confirmPswrdCtrl.value)
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     else
  //       confirmPswrdCtrl.setErrors(null);
  //   }
  // }

  // register() {
  //   var body = {
  //     UserName: this.formModel.value.UserName,
  //     Email: this.formModel.value.Email,
  //     FullName: this.formModel.value.FullName,
  //     Password: this.formModel.value.Passwords.Password
  //   };
  //   return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  // }

  login(formData) {
    return this.http.post(this.authService.APPSERVER + '/Authentication/Login', formData);
  }

  saveUser(formData) {
    return this.http.post(this.authService.APPSERVER + '/Users/Create', formData);
  }

  getUser() {
    return this.http.get(this.authService.APPSERVER + '/Users/GetAll');
  }

  // getUserProfile() {
  //   return this.http.get(this.BaseURI + '/UserProfile');
  // }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
