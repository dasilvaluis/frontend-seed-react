import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export function renderApp() {
  const container = document.getElementById('app');
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}

renderApp();

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    renderApp();
  });
}
