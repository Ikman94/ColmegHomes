import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Properties from './components/pages/properties';
import SingleProperty from './components/pages/singleProperty';
import Contact from './components/pages/contact';
import Services from './components/pages/services';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/properties" component={Properties}></Route>
        <Route exact path="/properties/:id" component={SingleProperty}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
