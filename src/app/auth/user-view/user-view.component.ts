import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public lstUser=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe((res:any)=>{
      console.log(res)

    },err=>{
      console.log(err)
    })
  }

}
