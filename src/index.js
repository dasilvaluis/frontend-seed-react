import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const container = document.getElementById('app-root');
const root = ReactDOM.createRoot(container);

export function renderApp() {
  root.render(<App />);
}

renderApp();

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    renderApp();
  });
}
