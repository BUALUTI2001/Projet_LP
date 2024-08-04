import React from 'react';
import './App.css';
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import DepartementsHome from './components/departements/DepartementsHome';
import TeamsCards from './components/teams/TeamsCards';
import Teams from './components/teams/Teams';
import Deliberation from './components/deliberation/Deliberation';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/about" exact component={About}/>
           <Route path="/departements" exact component={DepartementsHome}/>
           <Route path="/teams" exact component={Teams}/>
           <Route path="/deliberation" exact component={Deliberation}/>
           <Route path="/contact" exact component={Contact}/>

        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
