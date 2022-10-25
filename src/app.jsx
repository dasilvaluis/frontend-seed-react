import React from 'react';
import './styles/app.scss';

export function handleClickMe() {
  alert('Good human.');
}

export default function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <h1>Hello!</h1>
        <p>Welcome to your new app.</p>
        <div>
          <button onClick={handleClickMe}>Click me!</button>
        </div>
      </div>
    </React.StrictMode>
  );
}
