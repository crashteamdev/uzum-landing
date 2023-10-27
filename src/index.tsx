import React from 'react';
import ReactDOM from 'react-dom/client';

import SEO from './layouts/seo';
import App from './app/App';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/Translate/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <SEO />
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
