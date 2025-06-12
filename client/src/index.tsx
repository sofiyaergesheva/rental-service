import { App } from './components/app/app'
import { offers } from './mocks/offers';
import React from 'react';
import { offersList } from './mocks/offers-list';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersList={offersList}
        offers={offers} />
    </Provider>
  </React.StrictMode>
);