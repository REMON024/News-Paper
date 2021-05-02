import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { RoleService } from 'src/app/shared/service/role.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public user:User=new User();
  public lstRole=[];
  public roleId:string;

  constructor(private userservice:UserService,private roleService:RoleService) { }

 

  ngOnInit(): void {
    this.roleService.getRoll().subscribe((res:any)=>{
      console.log(res)
      this.lstRole=res.data;
    })
  }

  save(){
    this.userservice.saveUser(this.user).subscribe(res=>{
      console.log(res);
    })

  }

}
