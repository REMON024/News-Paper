import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User=new User();

  constructor(private userservice:UserService) { }

  save(){
    this.userservice.saveUser(this.user).subscribe(res=>{
      console.log(res);
    })

  }

  ngOnInit(): void {
  }

}
