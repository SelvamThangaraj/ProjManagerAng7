import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postuser } from '../postuser';
import { User } from './user';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';
import { Response } from '@angular/http';
import {UserService} from './user.service';

@Component({
  selector: 'app-pmadduser',
  templateUrl: './pmadduser.component.html',
  styleUrls: ['./pmadduser.component.scss']
})
export class PmadduserComponent extends BaseService implements OnInit {

  userToAdd: User;
  isFirstNameAsc: any;
  isLastNameAsc: any;
  isEmpIdAsc: any;
  users: Array<User>;
  buttonName: string;
  UserObservable: Observable<any[]>;
  tmpdata: Observable<any[]>;
  constructor(private http: HttpClient,private userService:UserService) {
    super();
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.userToAdd = new User();
    this.getUsers();
}

 getUsers(){
  this.userService.getUsers().subscribe((users) => {
    console.log(JSON.stringify(users));
    this.users = users;
  },
    (error) => {
    });

}
  
  resetAll() {
    this.userToAdd = new User();

  };

  addUser() {
    console.log("User component addUser=>"+this.userToAdd);
    this.userService.addUser(this.userToAdd).subscribe(
          data => {
            console.log("POST Request is successful ", data);
            
          },
          error => {
            console.log("Error", error);
          }
        );      
  }

  editUser(user){
    this.userToAdd=user;

  }

  updateUser(){
    this.userService.updateUser(this.userToAdd)
    .subscribe(
     data => {
       console.log("Update Request is successful ", data);
       
     },
     error => {
       console.log("Error", error);
     }
    );
  }

  deleteUser(user){
     this.userService.deleteUser(user)
         .subscribe(
          data => {
            console.log("Delete Request is successful ", data);
            
          },
          error => {
            console.log("Error", error);
          }
     );

  }

}
