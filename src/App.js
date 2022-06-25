import logo from './logo.svg';
import './App.css';
import Button  from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

function Hello () {
  return (
  <h1>Hello world</h1>
  );
}
const Bye = <h2>Bye</h2>;


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
        <Button>Hello</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
