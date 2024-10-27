import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  @Input() item: any;
  // Full circumference for the circle (based on radius 15.9155 in SVG)
  private circumference: number = 2 * Math.PI * 15.9155;

  getStrokeDashArray(): string {
    return `${this.circumference}`;
  }

  getStrokeDashOffset(percentage: number): string {
    return `${this.circumference - (percentage / 100) * this.circumference}`;
  }
}
