import './App.css';
import './components/screens/home';
import { BrowserRouter, Route } from 'react-router-dom';
//screen imports
import Navbar from './components/navbar';
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/screens/home';
import Data from './components/screens/data';
import Profile from './components/screens/profile';
import Upload from './components/screens/upload';
import Uploadpreview from './components/screens/uploadpreview';
import Shop from './components/screens/shop';




function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
      <Route path="/preview">
        <Uploadpreview />
      </Route>
      <Route path="/notification">
        <Data />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/register">
        <Signup />
      </Route>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
