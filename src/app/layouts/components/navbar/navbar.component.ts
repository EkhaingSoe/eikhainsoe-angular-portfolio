import { Component } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';
import { SettingService } from '../../../shared/services/setting.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedColorClass: string = 'text-red-600';
  constructor(
    private sidebarService: SidebarService,
    private settingService: SettingService
  ) {
    
  }

  ngOnInit() {
    this.settingService.selectedColor$.subscribe((colorClass) => {
      console.log(colorClass);
      this.selectedColorClass = colorClass;
    });
  }

  openSidebar() {
    this.sidebarService.toggleSidebar(true);
  }

  getHoverClass() {
    // Remove 'text-' prefix from selectedColorClass to create hover class
    return 'hover:' + this.selectedColorClass.replace('text', '');
  }
}
