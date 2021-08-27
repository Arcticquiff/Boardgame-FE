import './App.css';
import { Switch, Route } from 'react-router';
import components from './Components/ComponentExporter';
import { useState, useEffect } from 'react';
const { Header } = components;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {

  }, [currentUser])
  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path="/">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
