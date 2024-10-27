import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private selectedColorSource = new BehaviorSubject<string>('-custom-red');
  selectedColor$ = this.selectedColorSource.asObservable();
  setSelectedColor(colorClass: string) {
    this.selectedColorSource.next(colorClass);
  }
}
