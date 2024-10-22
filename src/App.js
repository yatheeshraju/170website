import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MainFooter from './components/MainFooter/MainFooter';
import MainNav from './components/MainNav/MainNav';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
       <MainNav/>
       <BrowserRouter id='content'>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route  path='/about'>
       <About/>
       </Route>
       <Route  path='/contact'>
       <Contact/>
       </Route>
       </BrowserRouter>
       
      <MainFooter/>
    </div>
  );
}

export default App;
