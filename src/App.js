import logo from './logo.svg';
import './App.css';
import Adress from './component/profile/Adress'
import Fullname from './component/profile/Fullname'
import Profile from './component/profile/Profile'
function App() {
  return (
    <div className="App">
     <Profile/>

     <Fullname/>
     <Adress/>
    </div>
  );
}

export default App;
