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
  const [loading, setLoading] = useState(false);
  useEffect(() => { }, [currentUser])
  useEffect(() => getReviews(category, setReviews, page, setLoading), [category, setReviews, page])
  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? <main id="navBarAndReviewDisplay">
        <NavBar setCategory={setCategory} />
        <Switch>
          <Route exact path="/">
            {loading ? <p>loading...</p> : <ReviewDisplay reviews={reviews} page={page} setPage={setPage} />}
          </Route>
        </Switch>
      </main> : <main>
        <p id="loggedOutText"><span id="boldStart">Hey welcome to BoardGamiacs,</span> home of reviews for games that you've never even heard of! Don't google them though, you'll challenge the whole legitimacy if this website. If you don't know or have a username to log in, feel free to use "tickle122", don't hold it against me, I didn't generate the names.</p>
      </main>}
    </div>
  );
}

export default App;
