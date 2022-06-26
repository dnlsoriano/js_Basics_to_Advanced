import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = 'Gentleman';

  const myObj = {
    name : 'Marco',
    lastName : 'Polo',
    job : 'Adventurer'
  }

  const inputPlaceHolder = 'Enter Your Details';
  const inputMoreDetails = <input placeholder='Something more you want to share?' />;

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  return (
    <div className="App">
      <header className="App-header">
        <h3>Full name : {getFullName(firstName, lastName)}</h3>
        <input placeholder={inputPlaceHolder} />
        {inputMoreDetails}
        {myObj.name} {myObj.lastName}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
