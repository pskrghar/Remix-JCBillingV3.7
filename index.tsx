
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for complete offline capabilities and precaching
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('PWA: New content available, reloading...');
  },
  onOfflineReady() {
    console.log('PWA: App is ready to work completely offline');
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
