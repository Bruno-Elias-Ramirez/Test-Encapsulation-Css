import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DhDashboardComponent} from "./dh-dashboard.component";
import {DhHeaderModule} from "../../../../share/components/header/dh-header.module";
import {RouterModule} from "@angular/router";
import {DhDashboardRoutingModule} from "./dh-dashboard-routing.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {DhHeroesComponent} from "./components/heroes/dh-heroes.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {DhCropperModalComponent} from "./components/cropper-modal/dh-cropper-modal.component";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ImageCropperModule} from "ngx-image-cropper";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [
    DhDashboardComponent,
    DhHeroesComponent,
    DhCropperModalComponent
  ],
  imports: [
    CommonModule,
    DhHeaderModule,
    RouterModule,
    DhDashboardRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzCardModule,
    NzUploadModule,
    NzButtonModule,
    ImageCropperModule,
    NzIconModule,
  ],
  providers: [
    NzModalService
  ],
})
export class DhDashboardModule {
}
