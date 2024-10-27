import { Component } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-setting-icons',
  templateUrl: './setting-icons.component.html',
  styleUrl: './setting-icons.component.css',
})
export class SettingIconsComponent {
  constructor(private sidebarService: SidebarService) {}

  openSettingSidebar() {
    this.sidebarService.toggleSetting(true);
  }
}
