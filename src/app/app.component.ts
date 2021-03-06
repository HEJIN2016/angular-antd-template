// 导入component装饰器
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UserService} from './service/user.service';
import UserInfo from '../model/userInfo';

@Component({
  // 组件元数据
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  private userInfo: UserInfo;

  @ViewChild('form') form;

  ngOnInit() {
    this.form.setData();
    this.route.queryParams.subscribe((data) => {
      console.log(data);
    })
  }

  msg: string = 'test string';

  getOuter(msg: string) {
    console.log(msg);
  }

  getOuter1(msg: object) {
    console.log(msg);
  }

  title = 'my-app-test';

  constructor(public route: ActivatedRoute, public userService: UserService) {
    this.userInfo = userService.getUserInfo();
  }
}
