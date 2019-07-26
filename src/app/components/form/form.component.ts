import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StorageService} from '../../service/storage.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit {

  @ViewChild('myattr') myattr: ElementRef;

  public peopleInfo: any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',

    hobby: [{
      title: '吃饭',
      checked: false
    }, {
      title: '睡觉',
      checked: false
    }, {

      title: '敲代码',
      checked: true
    }],

    mark: ''
  };

  setData() {
    console.log('111')
  }

  doSubmit() {
    /*
    jquery  dom操作
      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);
    */

    console.log(this.peopleInfo);
  }

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.getData();
    let attrEl = this.myattr;
    console.log(attrEl);
  }

  async getData() {
    let data = await this.storageService.getData();
    console.log(data);
  }

}
