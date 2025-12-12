import { createRoot } from 'react-dom/client';
import { Provider } from './Context.jsx';
import React from 'react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

