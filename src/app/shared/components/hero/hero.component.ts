import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  selectedColorClass: string = '';
  constructor(private settingService: SettingService) {
    this.settingService.selectedColor$.subscribe((colorClass) => {
      this.selectedColorClass = colorClass;
    });
  }

}
