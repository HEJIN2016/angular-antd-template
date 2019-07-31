import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RxjsService} from '../../service/rxjs.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {UserService} from '../../service/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  content1: string = `<h1>1212</h1>`;

  id: number = 123;

  date: Date = new Date();

  @Input() msg: string;

  userInfo: object;

  /*用EventEmitter和output装饰器配合使用 <string>指定类型变量*/
  @Output() private outer = new EventEmitter<string>();
  @Output() private outer1 = new EventEmitter<object>();

  constructor(public request: RxjsService, public $http: HttpClient, public userService: UserService) {
    this.content1 = '<h1>1212</h1>';
    this.userInfo = userService.getUserInfo();
  }

  getData(val) {
    console.log(val)
  }

  getAppData() {
    const opts = {
      headers: new HttpHeaders({
        'token': '123'
      })
    };
    this.$http.get('/assets/a.json', opts).subscribe((res) => {
      console.log(res);
    });
  }

  sendData() {
    this.outer.emit('test');
    this.outer1.emit({
      a: 1
    })
  }

  ngOnInit() {
    this.sendData();

    this.getAppData();

    setTimeout(() => {
      this.userService.setUserInfo({
        name: 'hejin2',
        id: 22
      })
    }, 3000);

    // 调用rxjs异步方法
    let sub = this.request.getRxData().subscribe((data) => {
      console.log(data);
    });
    // rxjs可中途撤回异步动作，promise不可以中途撤销
    setTimeout(() => {
      // sub.unsubscribe();
    }, 1000);
  }

}
