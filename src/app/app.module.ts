import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {TestPipe} from './pipe/test.pipe';
import {FormComponent} from './components/form/form.component';
import {StorageService} from './service/storage.service';
import {PageAComponent} from './page/page-a/page-a.component';
import {PageBComponent} from './page/page-b/page-b.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh'

registerLocaleData(zh);

@NgModule({
  declarations: [
    // 声明组件、管道、指令
    AppComponent,
    HeaderComponent,
    TestPipe,
    FormComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    // 声明依赖模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [StorageService, {provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent] // 声明主组件
})
export class AppModule { }


