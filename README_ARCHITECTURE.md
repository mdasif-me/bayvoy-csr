Frontend Architecture
app/
├── (public)/
├── (auth)/
├── admin/
├── vendor/
├── customer/
├── api/
├── layout.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
Public Routes
(public)/
├── page.tsx
├── hotels/
├── tours/
├── cars/
├── destinations/
├── about/
├── contact/
└── search/

Pages:
Home
Hotel Listing
Hotel Details
Tour Listing
Car Listing
Destination Pages
Search Result
Auth Routes
(auth)/
├── login/
├── register/
├── verify-otp/
├── forgot-password/
└── reset-password/
Admin Panel
admin/
├── dashboard/
├── users/
├── vendors/
├── hotels/
├── bookings/
├── payments/
├── reviews/
├── cms/
├── settings/
└── analytics/
Vendor Panel
vendor/
├── dashboard/
├── hotels/
├── rooms/
├── tours/
├── cars/
├── bookings/
├── earnings/
├── reviews/
└── settings/
Customer Panel
customer/
├── dashboard/
├── bookings/
├── wishlist/
├── reviews/
├── notifications/
├── payments/
├── profile/
└── settings/






components/
├── ui/
├── forms/
├── tables/
├── modals/
├── cards/
├── buttons/
├── navigation/
├── layout/
├── feedback/
├── loaders/
└── shared/

ui/
├── button.tsx
├── input.tsx
├── dialog.tsx
├── dropdown.tsx
├── table.tsx
└── ...

forms/
├── form-input.tsx
├── form-select.tsx
├── form-checkbox.tsx
├── form-textarea.tsx
└── form-date-picker.tsx

tables/
├── data-table.tsx
├── table-pagination.tsx
├── table-search.tsx
└── table-actions.tsx

modules/
├── auth/
├── hotel/
├── booking/
├── payment/
├── vendor/
├── admin/
├── review/
├── tour/
├── car-rental/
├── notification/
└── cms/

Each module contains:
hotel/
├── api/
├── components/
├── hooks/
├── services/
├── types/
├── validations/
├── constants/
├── store/
└── utils/

hotel/
├── api/
│   ├── get-hotels.ts
│   ├── get-hotel-details.ts
│   └── create-hotel.ts
│
├── components/
│   ├── hotel-card.tsx
│   ├── hotel-gallery.tsx
│   ├── hotel-search.tsx
│   └── hotel-booking-form.tsx
│
├── hooks/
│   ├── use-hotels.ts
│   └── use-hotel-details.ts
│
├── services/
│   └── hotel.service.ts
│
├── types/
│   └── hotel.types.ts
│
├── validations/
│   └── hotel.validation.ts
│
└── store/
    └── hotel.store.ts


services/
├── api-client.ts
├── auth.service.ts
├── upload.service.ts
├── payment.service.ts
└── notification.service.ts

store/  (Zustand)
├── auth.store.ts
├── app.store.ts
├── booking.store.ts
└── ui.store.ts


hooks/
├── use-auth.ts
├── use-debounce.ts
├── use-modal.ts
├── use-pagination.ts
├── use-device.ts
└── use-permission.ts

providers/
├── query-provider.tsx
├── theme-provider.tsx
├── auth-provider.tsx
└── socket-provider.tsx

layouts/
├── public-layout.tsx
├── admin-layout.tsx
├── vendor-layout.tsx
└── customer-layout.tsx

lib/
├── axios.ts
├── query-client.ts
├── socket.ts
├── dayjs.ts
└── uploadthing.ts

utils/
├── cn.ts
├── format-price.ts
├── format-date.ts
├── generate-slug.ts
└── calculate-rating.ts

types/
├── api.types.ts
├── auth.types.ts
├── booking.types.ts
└── common.types.ts

constants/
├── routes.ts
├── roles.ts
├── booking-status.ts
├── payment-status.ts
└── app.constants.ts

config/
├── env.ts
├── site.ts
└── navigation.ts

styles/
├── globals.css
├── theme.css
└── scrollbar.css

