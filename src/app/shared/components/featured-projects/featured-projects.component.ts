import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css',
})
export class FeaturedProjectsComponent {
  showAllProjects = true;


  showAll() {
    this.showAllProjects = true;
  }

  showReact() {
    this.showAllProjects = false;
  }
}
