import './styles/app.scss';

export function handleClickMe() {
  alert('Good human.');
}

window.handleClickMe = handleClickMe;

export default function App() {
  return (`
    <div class="app">
      <h1>Hello Freak!</h1>
      <p>Welcome to your new app.</p>
      <div>
        <button onclick="handleClickMe()">Click me!</button>
      </div>
    </div>
  `);
}
