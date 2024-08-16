import { Component, OnInit } from '@angular/core';

interface Flat {
  id: number;
  title: string;
  description: string;
  size: string;
  image: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  available: boolean;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  flats: Flat[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadFlats();
  }

  loadFlats(): void {
    // Example data, this would likely come from an API in a real-world scenario
    this.flats = [
      {
        id: 1,
        title: 'Luxury Penthouse',
        description: 'A stunning penthouse with breathtaking views and modern amenities.',
        size: '1500 sqft',
        image: '5.jpg',
        price: '$1,200,000',
        bedrooms: 3,
        bathrooms: 2,
        available: true
      },
      {
        id: 2,
        title: 'Cozy One-Bedroom Flat',
        description: 'Perfect for singles or couples, this one-bedroom flat offers comfort and style.',
        size: '800 sqft',
        image: '6.jpg',
        price: '$450,000',
        bedrooms: 1,
        bathrooms: 1,
        available: true
      },
      {
        id: 3,
        title: 'Spacious Family Apartment',
        description: 'This large apartment is perfect for families, featuring ample space and child-friendly amenities.',
        size: '2000 sqft',
        image: '7.jpg',
        price: '$850,000',
        bedrooms: 4,
        bathrooms: 3,
        available: false // Marked as unavailable
      },
      {
        id: 4,
        title: 'Spacious Family Apartment',
        description: 'This large apartment is perfect for families, featuring ample space and child-friendly amenities.',
        size: '2000 sqft',
        image: '2.jpg',
        price: '$850,000',
        bedrooms: 4,
        bathrooms: 3,
        available: false // Marked as unavailable
      }
      // More flats can be added here
    ];
  }

  // You can add additional methods for interactivity
  bookVisit(flat: Flat): void {
    if (flat.available) {
      alert(`You have booked a visit to see the ${flat.title}.`);
    } else {
      alert(`${flat.title} is currently unavailable.`);
    }
  }
}
