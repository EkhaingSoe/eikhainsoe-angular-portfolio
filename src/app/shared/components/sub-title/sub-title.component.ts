import { Component, Input } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.css',
})
export class SubTitleComponent {
  @Input() titleOne: string = 'About'; // Default value if not provided
  @Input() titleTwo: string = 'Me';
  selectedColorClass: string = '';
  constructor(private settingService: SettingService) {
    this.settingService.selectedColor$.subscribe((colorClass) => {
      this.selectedColorClass = colorClass;
    });
  }
}
