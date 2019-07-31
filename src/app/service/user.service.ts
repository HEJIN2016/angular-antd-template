import {Injectable} from '@angular/core';
import UserInfo from '../model/userInfo'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo;

  constructor() {
    this.userInfo = new UserInfo(123, 'jin');
  }

  setUserInfo(user: UserInfo) {
    this.userInfo = user;
  }

  getUserInfo() {
    return this.userInfo;
  }
}
