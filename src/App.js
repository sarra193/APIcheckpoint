import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import bg from './bg.jpg'
import NavBar from './component/NavBar';

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat ', backgroundSize: 'cover' }}>
      <NavBar/>
      <UserList />
    </div>
  );
}

export default App;
