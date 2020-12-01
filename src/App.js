import './App.css';
import './components/screens/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//screen imports
import Navbar from './components/navbar';
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/screens/home';
import Data from './components/screens/data';
import Profile from './components/screens/profile';
import Upload from './components/screens/upload';
import Uploadgallery from './components/screens/UploadGallery';
import Shop from './components/screens/shop';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/upload">
          <Upload />
        </Route>
        <Route path = "/gallery">
          <Uploadgallery />
        </Route>
        <Route path = "/notification">
          <Data />
        </Route>
        <Route path = "/profile">
          <Profile />
        </Route>
        <Route path = "/shop">
          <Shop />
        </Route>
        <Route path = "/signin">
          <Signin />
        </Route>
        <Route path = "/register">
          <Signup />
        </Route>
      </Switch>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
