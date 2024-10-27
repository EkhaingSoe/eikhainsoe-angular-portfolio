import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    SharedModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
