import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
function App() {
  return (
      <Router>
       <Switch>
           <Route exact path='/'>
              <Home></Home>
           </Route>
          <Route path='*'>
              <ErrorPage></ErrorPage>
          </Route>
    
       </Switch> 
      </Router>  
  );
}

export default App;
