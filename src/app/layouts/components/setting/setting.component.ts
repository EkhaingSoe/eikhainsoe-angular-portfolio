import { Component } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  isSettingSidebarOpen = true;
  colors = [
    { name: 'red', colorClass: 'bg-custom-red' },
    { name: 'purple', colorClass: 'bg-custom-purple' },
    { name: 'blue', colorClass: 'bg-custom-blue' },
    { name: 'orange', colorClass: 'bg-custom-orange' },
    { name: 'teal', colorClass: 'bg-custom-teal' },
    { name: 'navy', colorClass: 'bg-custom-navy' },
    { name: 'danger', colorClass: 'bg-custom-danger' },
    { name: 'pink', colorClass: 'bg-custom-pink' },
    { name: 'gray', colorClass: 'bg-custom-gray' },
    { name: 'green', colorClass: 'bg-custom-green' },
  ];
  selectedColorClass = 'bg-custom-red'; // Default theme color

  selectColor(colorClass: string) {
    this.selectedColorClass = colorClass;
  }

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.settingOpen$.subscribe((isOpen) => {
      this.isSettingSidebarOpen = isOpen;
    });
  }

  closeSetting() {
    this.sidebarService.toggleSetting(false);
  }
}
