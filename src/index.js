import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    renderApp();
  });
}
