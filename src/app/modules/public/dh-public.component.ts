import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dh-public',
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DhPublicComponent {
}
