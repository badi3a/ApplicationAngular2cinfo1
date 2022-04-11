import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-lis-user',
  templateUrl: './lis-user.component.html',
  styleUrls: ['./lis-user.component.css']
})
export class LisUserComponent implements OnInit {
  listUser: User[];
  constructor() { }

  ngOnInit(): void {
    this.listUser= [
      {
        id: 12,
        name: "Bilel",
        phone: "980876786",
        email: "bilel@gmail.com",
        job: "software engineer",
        picture: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        id: 12,
        name: "Salma",
        phone: "980876786",
        email: "salma@gmail.com",
        job: "Teacher",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png"
      },
      {
        id: 12,
        name: "Hamza",
        phone: "23457766",
        email: "hamza@gmail.com",
        job: "Web Master",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png"
      }
    ]
  }
  delete(user:User):void{
    let i = this.listUser.indexOf(user);
    if(i!=-1){
      this.listUser.splice(i,1)
    }
  }
  clacul(){
    //for listUser , job, Teacher
  }
}
