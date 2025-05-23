import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers';
import React from 'react';
import { offersList } from './mocks/offers-list';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      offersList={offersList}
      offers={offers} />
  </React.StrictMode>
);