import{BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import './App.css';
import About from './screens/about/about_screen';
import Home from './screens/home/home_screen';
import Project from './screens/project/project_component';

function App() {
  return (
<Router>
    <Switch>
          <Route path="/me">
            <About />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
</Router>
  );
}

export default App;
