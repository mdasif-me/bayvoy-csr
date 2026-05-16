import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const QUICK_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Tour Packages', href: '/tours' },
  { name: 'Travel Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Become a Partner', href: '/become-partner' },
];

export const SERVICES = [
  { name: 'Hotel Booking', href: '/hotels' },
  { name: 'Car Rental', href: '/cars' },
  { name: 'Guided Tours', href: '/tours' },
  { name: 'Custom Packages', href: '/packages' },
  { name: 'Travel Insurance', href: '/insurance' },
];

export const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    Icon: () =>
      React.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        React.createElement('path', {
          d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
        })
      ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    Icon: () =>
      React.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        React.createElement('rect', {
          width: '20',
          height: '20',
          x: '2',
          y: '2',
          rx: '5',
          ry: '5',
        }),
        React.createElement('path', {
          d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
        }),
        React.createElement('line', {
          x1: '17.5',
          x2: '17.51',
          y1: '6.5',
          y2: '6.5',
        })
      ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    Icon: () =>
      React.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        React.createElement('path', {
          d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
        })
      ),
  },
  {
    name: 'Youtube',
    href: 'https://youtube.com',
    Icon: () =>
      React.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        React.createElement('path', {
          d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 68.4 68.4 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 68.4 68.4 0 0 1-15 0 2 2 0 0 1-2-2Z',
        }),
        React.createElement('path', { d: 'm10 15 5-3-5-3z' })
      ),
  },
];
