import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Title 1',
      para: 'This is the first paragraph describing the item.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Title 2',
      para: 'This is the second paragraph describing the item.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Title 3',
      para: 'This is the third paragraph describing the item.',
    },
  ];
}
