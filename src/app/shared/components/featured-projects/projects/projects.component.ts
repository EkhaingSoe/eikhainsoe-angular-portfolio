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
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Hotel Booking',
      para: 'This is Hotel Booking using HTML,CSS and Bootstrap',
      link: 'https://ekhaingsoe.github.io/hotel-booking-project/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Food',
      para: 'This is food website using sass',
      link: 'https://elaborate-torte-5ac6e9.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sushi Website',
      para: 'This is sushi website using bootstrap and sass',
      link: 'https://verdant-vacherin-8bd6b6.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Fake Store API',
      para: 'This is Fake Store API using HTML,CSS, React and Tailwind',
      link: 'https://ecommerce1996.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Architecture Design',
      para: 'This is Architecture Design using HTML,CSS, React and Tailwind',
      link: 'https://extraordinary-monstera-6707d8.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Travel Code 2 Lab',
      para: 'This is Travel Code 2 Lab using HTML,CSS, React and Tailwind',
      link: 'https://travelcode2lab.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Multi Mart',
      para: 'This is Multi Mart using HTML,CSS, React and Tailwind',
      link: 'https://voluble-kangaroo-a22f08.netlify.app/',
    },
    {
      image:
        'https://images.unsplash.com/photo-1729742201809-6e8e14fc25e2?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Dashboard',
      para: 'This is Dashboard using HTML,CSS, React and Tailwind',
      link: 'https://dashboard1996.netlify.app/',
    },
  ];
}
