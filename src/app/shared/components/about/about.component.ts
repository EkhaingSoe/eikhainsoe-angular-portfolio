import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  items = [
    {
      color: '#FAF1C7',
      title: 'Frontend',
      subtitle: '( Angular, React )',
      percentage: 85,
      description:
        'I have experience which developed Angular (ERP system and E-commerce) and React Projects',
    },
    {
      color: '#D1E8FF',
      title: 'Backend',
      subtitle: '( Node.js, Django )',
      percentage: 50,
      description:
        "Although I don't have real-world experience , I acknowledged backend knowledge",
    },
    {
      color: '#D5F5FF',
      title: 'UI/UX',
      subtitle: '( Figma, Canva )',
      percentage: 60,
      description:
        'I have learned UI/UX design principles and developed reward-app of mobile shop using Figma.',
    },
    // Add more items as needed
  ];

  // Full circumference for the circle (based on radius 15.9155 in SVG)
  private circumference: number = 2 * Math.PI * 15.9155;

  getStrokeDashArray(): string {
    return `${this.circumference}`;
  }

  getStrokeDashOffset(percentage: number): string {
    return `${this.circumference - (percentage / 100) * this.circumference}`;
  }
}
