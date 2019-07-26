import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {observeOn} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() {
  }

  times: number = 0;

  // Promise 处理异步
  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('---promise timeout---');
      }, 1000)
    })
  }

  getRxData() {
    return new Observable((observer) => {
      let uid = setInterval(() => {
        ++this.times;
        console.log(this.times);
        if (this.times >= 5) {
          clearInterval(uid);
        }
        // rxjs异步任务可循环执行，promise不可以
        observer.next('observable timeout');
      }, 2000);
    })
  }
}
