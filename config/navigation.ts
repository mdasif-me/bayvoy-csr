export const navigationConfig = {
  public: [
    { label: 'Home', href: '/' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Tours', href: '/tours' },
    { label: 'Cars', href: '/cars' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  auth: [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ],
  admin: [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Users', href: '/admin/users' },
    { label: 'Vendors', href: '/admin/vendors' },
    { label: 'Bookings', href: '/admin/bookings' },
    { label: 'Analytics', href: '/admin/analytics' },
  ],
  vendor: [
    { label: 'Dashboard', href: '/vendor/dashboard' },
    { label: 'Hotels', href: '/vendor/hotels' },
    { label: 'Bookings', href: '/vendor/bookings' },
    { label: 'Earnings', href: '/vendor/earnings' },
  ],
  customer: [
    { label: 'Dashboard', href: '/customer/dashboard' },
    { label: 'My Bookings', href: '/customer/bookings' },
    { label: 'Wishlist', href: '/customer/wishlist' },
    { label: 'Profile', href: '/customer/profile' },
  ],
};
