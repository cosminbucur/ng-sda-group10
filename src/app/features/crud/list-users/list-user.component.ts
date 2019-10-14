import { User } from '../../../shared/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public users: User[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.userService.getAll()   // observable User[]
    .subscribe((users: User[]) => {
      this.users = users; // save user[] from observable to local variable
      users.forEach(user => {
        console.log(user);
      });
    });
  }
}
