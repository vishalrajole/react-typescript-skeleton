import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import ErrorBoundary from './components/ErrorBoundary';

const container = document.getElementById('root');

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
