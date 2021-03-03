import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';


function App() {
  const title = "Hello world !"

  return (
    <div className="App">
      <Router>
        <Header title={title} />
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route path='/:id' component={GameDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
