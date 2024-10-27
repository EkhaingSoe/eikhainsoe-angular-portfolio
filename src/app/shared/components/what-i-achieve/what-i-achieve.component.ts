import { Component } from '@angular/core';

@Component({
  selector: 'app-what-i-achieve',
  templateUrl: './what-i-achieve.component.html',
  styleUrl: './what-i-achieve.component.css',
})
export class WhatIAchieveComponent {
  
  showEducationSection = true;

  showEducation() {
    this.showEducationSection = true;
  }

  showExperience() {
    this.showEducationSection = false;
  }
}
