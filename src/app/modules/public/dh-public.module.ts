import {NgModule} from '@angular/core';

import {DhPublicRoutingModule} from './dh-public-routing.module';
import {DhPublicComponent} from "./dh-public.component";

@NgModule({
  declarations: [DhPublicComponent],
  imports: [DhPublicRoutingModule]
})
export class DhPublicModule {
}
