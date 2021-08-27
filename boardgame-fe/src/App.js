import './App.css';
import { Switch, Route } from 'react-router';
import { useState, useEffect } from 'react';
import components from './Components/ComponentExporter';
import functions from './API'
const { getReviews } = functions;
const { Header, NavBar, ReviewDisplay } = components;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  useEffect(() => { }, [currentUser])
  useEffect(() => getReviews(category, setReviews, page), [category, setReviews, page])
  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <main id="navBarAndReviewDisplay">
        <NavBar setCategory={setCategory} />
        <Switch>
          <Route exact path="/">
            <ReviewDisplay reviews={reviews} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
