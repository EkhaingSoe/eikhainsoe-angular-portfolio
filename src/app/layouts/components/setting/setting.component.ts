import { ChangeDetectorRef, Component } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';
import { SettingService } from '../../../shared/services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  
  isSettingSidebarOpen = true;
  colors = [
    { name: 'red', colorClass: '-custom-red' },
    { name: 'purple', colorClass: '-custom-purple' },
    { name: 'blue', colorClass: '-custom-blue' },
    { name: 'orange', colorClass: '-custom-orange' },
    { name: 'teal', colorClass: '-custom-teal' },
    { name: 'navy', colorClass: '-custom-navy' },
    { name: 'danger', colorClass: '-custom-danger' },
    { name: 'pink', colorClass: '-custom-pink' },
    { name: 'gray', colorClass: '-custom-gray' },
    { name: 'green', colorClass: '-custom-green' },
  ];
  selectedColorClass = '-custom-red'; // Default theme color

  selectColor(colorClass: string) {
    this.selectedColorClass = colorClass;
    this.settingService.setSelectedColor(colorClass);
    this.changeDetector.detectChanges();
  }

  constructor(
    private sidebarService: SidebarService,
    private settingService: SettingService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sidebarService.settingOpen$.subscribe((isOpen) => {
      this.isSettingSidebarOpen = isOpen;
    });
    this.settingService.selectedColor$.subscribe(
      (colorClass) => (this.selectedColorClass = colorClass)
    );
  }

  closeSetting() {
    this.sidebarService.toggleSetting(false);
  }
}
