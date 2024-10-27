import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  icons = [
    {
      iconClass: 'ri-facebook-line',
      label: 'Facebook',
      link: 'https://www.facebook.com',
    },
    {
      iconClass: 'ri-twitter-line',
      label: 'Twitter',
      link: 'https://www.twitter.com',
    },
    {
      iconClass: 'ri-instagram-line',
      label: 'Instagram',
      link: 'https://www.instagram.com/eikhaingseo/',
    },
    {
      iconClass: 'ri-linkedin-line',
      label: 'linkedIn',
      link: 'https://www.linkedin.com/in/ei-khaing-soe-b025542a3/',
    },
  ];
}
