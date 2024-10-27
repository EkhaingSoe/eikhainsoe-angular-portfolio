import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private settingOpen = new BehaviorSubject<boolean>(false);
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpen.asObservable();
  settingOpen$ = this.settingOpen.asObservable();

  toggleSidebar(isOpen: boolean) {
    this.sidebarOpen.next(isOpen);
  }

  toggleSetting(isOpen: boolean) {
    this.settingOpen.next(isOpen);
  }
}
