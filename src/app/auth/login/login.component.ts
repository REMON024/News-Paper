import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/model/login';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public objlogin:login=new login();
  constructor(private userservice:UserService) { }

  login(){
    this.userservice.login(this.objlogin).subscribe((res:any)=>{
      if(res){
        localStorage.setItem("token",res.data.token)
      }
      console.log(res)
    })
  }

 }
