import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      image: '../../../../../assets/images/travel-booking.jpg',
      title: 'Travel Booking ',
      para: 'This is Travel Booking using HTML,CSS and Bootstrap',
      link: 'https://ekhaingsoe.github.io/BookingProject1/',
    },
    {
      image: '../../../../../assets/images/hotel-booking.jpg',
      title: 'Hotel Booking',
      para: 'This is Hotel Booking using HTML,CSS and Bootstrap',
      link: 'https://ekhaingsoe.github.io/hotel-booking-project/',
    },
    {
      image: '../../../../../assets/images/foodie.jpg',
      title: 'Food',
      para: 'This is food website using sass',
      link: 'https://elaborate-torte-5ac6e9.netlify.app/',
    },
    {
      image: '../../../../../assets/images/sushi.png',
      title: 'Sushi Website',
      para: 'This is sushi website using bootstrap and sass',
      link: 'https://verdant-vacherin-8bd6b6.netlify.app/',
    },
    {
      image: '../../../../../assets/images/fakeApi.png',
      title: 'Fake Store API',
      para: 'This is Fake Store API using HTML,CSS, React and Tailwind',
      link: 'https://ecommerce1996.netlify.app/',
    },
    {
      image: '../../../../../assets/images/architecture.jpg',
      title: 'Architecture Design',
      para: 'This is Architecture Design using React and Tailwind',
      link: 'https://extraordinary-monstera-6707d8.netlify.app/',
    },
    {
      image: '../../../../../assets/images/travel.png',
      title: 'Travel Code 2 Lab',
      para: 'This is Travel Code 2 Lab using HTML,CSS, React and Tailwind',
      link: 'https://travelcode2lab.netlify.app/',
    },
    {
      image: '../../../../../assets/images/ecommerce.png',
      title: 'Multi Mart',
      para: 'This is Multi Mart using HTML,CSS, React and Tailwind',
      link: 'https://voluble-kangaroo-a22f08.netlify.app/',
    },
    {
      image: '../../../../../assets/images/dashboard.png',
      title: 'Dashboard',
      para: 'This is Dashboard using HTML,CSS, React and Tailwind',
      link: 'https://dashboard1996.netlify.app/',
    },
    {
      image: '../../../../../assets/images/invoice-app.png',
      title: 'Invoice-app',
      para: 'This is Invoice-app using HTML,CSS, React and Tailwind',
      link: 'https://invoice-app-1996.netlify.app/',
    },
  ];
}
