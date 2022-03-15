import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Start from './Start';
import Movielist from './Movielist';
import Contact from "./Contact"
import About from "./About"
function App() {
  return (
    <Router>
      
      <div className="App">
        
        <Navbar/>
       <Switch>
         <Route exact path="/">
           <Start/>
         </Route>
      <Route path="/Movielist">
        <Movielist/>
      </Route>
      <Route path="/Contact">
        <Contact/>
      </Route>
      
      <Route>
        <Movielist/>
      </Route>
      <Route path="/About"> 
        <About/>
      </Route>
      
      
       </Switch>
      
     
    </div>
    </Router>

  );
}

export default App;
