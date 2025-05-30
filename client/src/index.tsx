import { App } from './components/app/app'
import { offers } from './mocks/offers';
import React from 'react';
import { offersList } from './mocks/offers-list';
import { Setting } from './const';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.rentOffersCount}
      offersList={offersList}
      offers={offers} />
  </React.StrictMode>
);