import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingComponent } from './components/setting/setting.component';
import { SettingIconsComponent } from './components/setting-icons/setting-icons.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidebarComponent, SettingComponent, SettingIconsComponent],
  imports: [CommonModule,RouterModule],
  exports: [NavbarComponent, FooterComponent,SidebarComponent,SettingComponent,SettingIconsComponent],
})
export class LayoutsModule {}
