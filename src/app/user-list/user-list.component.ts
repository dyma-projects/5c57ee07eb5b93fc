import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users!: string[];
  public subscription: Subscription

  constructor(
    private userService: UserService
  ) // il faut probablement injecter un service ici !
  {}
  
  ngOnInit() {
    this.subscription = this.userService.users.subscribe((users: string[]) => {
      this.users = users;
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){this.subscription.unsubscribe();}
  }
}
