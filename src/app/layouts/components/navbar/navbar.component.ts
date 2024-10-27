import { Component } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  openSidebar() {
    this.sidebarService.toggleSidebar(true);
  }
}
