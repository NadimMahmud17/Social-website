import logo from './logo.svg';
import './App.css';
import Home from './pagess/Home/Home';
import Profile from './pagess/Profile/Profile';



function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: "-18%", right: '0'}}></div>
      <div className="blur" style={{top: "36%", left: '-8rem'}}></div>
      {/* <Home></Home> */}
      <Profile></Profile>
    </div>
  );
}

export default App;
