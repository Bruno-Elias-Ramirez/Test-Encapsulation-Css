import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DhHeaderComponent} from "./dh-header.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  declarations: [
    DhHeaderComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule
  ],
  exports: [
    DhHeaderComponent
  ]
})
export class DhHeaderModule {
}
