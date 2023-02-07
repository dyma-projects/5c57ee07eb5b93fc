import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  public addUser(user: string){
    this.users.next([...this.users.value, user]);
  }

}
