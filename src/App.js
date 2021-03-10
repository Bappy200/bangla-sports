import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import TeamDetails from './components/TeamDetails/TeamDetails';
import {useEffect,useState} from 'react'
function App() {
 const [footballTeams, setFootballTeams] = useState([])

  useEffect(()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
    .then(res => res.json())
    .then(data => setFootballTeams(data.teams))
    .catch(error => console.log(error))
  },[])

  return (
      <Router>
       <Switch>
           <Route exact path='/'>
              <Home footballTeams = {footballTeams}></Home>
           </Route>
           <Route path='/team/:id'>
              <TeamDetails></TeamDetails>
           </Route>
          <Route path='*'>
              <ErrorPage></ErrorPage>
          </Route>
    
       </Switch> 
      </Router>  
  );
}

export default App;
