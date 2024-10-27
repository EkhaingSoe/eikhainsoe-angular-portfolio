import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { EduationComponent } from './components/eduation/eduation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { WhatIAchieveComponent } from './components/what-i-achieve/what-i-achieve.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ProjectsComponent } from './components/featured-projects/projects/projects.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { HeroComponent } from './components/hero/hero.component';
import { SettingComponent } from '../layouts/components/setting/setting.component';
import { SkillsComponent } from './components/skills/skills.component';




@NgModule({
  declarations: [
    SubTitleComponent,
    EduationComponent,
    ExperienceComponent,
    AboutComponent,
    WhatIAchieveComponent,
    ServicesComponent,
    FeaturedProjectsComponent,
    ProjectsComponent,
    HireMeComponent,
    HeroComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SubTitleComponent,AboutComponent,WhatIAchieveComponent,ServicesComponent,FeaturedProjectsComponent,ProjectsComponent,HireMeComponent,HeroComponent,EduationComponent,SkillsComponent
  ]
})
export class SharedModule { }
