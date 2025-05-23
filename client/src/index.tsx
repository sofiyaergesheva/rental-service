import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App rentalOffersCount={Setting.RentalOffersCount} offers={offers} />
  </React.StrictMode>
);