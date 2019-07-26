import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageAComponent} from './page/page-a/page-a.component'
import {PageBComponent} from './page/page-b/page-b.component'

const routes: Routes = [
  {
    path: 'a',
    component: PageAComponent
  }, {
    path: 'b',
    component: PageBComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
