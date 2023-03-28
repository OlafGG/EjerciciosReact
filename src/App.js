import logo from './logo.svg';
import './App.css';
import UserList from './components/container/user.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserList></UserList>
      </header>
    </div>
  );
}

export default App;
