import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SEO from './layouts/seo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SEO />
    <App />
  </React.StrictMode>
);
