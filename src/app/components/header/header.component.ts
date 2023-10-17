import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  isTabActive(tabName: string): boolean {
    return this.router.isActive(tabName, true);
  }
}
