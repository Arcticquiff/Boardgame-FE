import './App.css';
import { Switch, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { Header, NavBar, ReviewDisplay, ViewFullReview } from './Components/ComponentExporter';
import { getReviews } from './API'

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [viewingReview, setViewingReview] = useState({});
  const [reviewComments, setReviewComments] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => getReviews(category, setReviews, page, setLoading, setTotalReviews), [category, page])
  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn} />
      {loggedIn ?
        <main id="navBarAndReviewDisplay">
          <NavBar
            setCategory={setCategory}
            currentUser={currentUser}
            setReviews={setReviews}
            setLoading={setLoading}
            page={page}
            category={category} />
          <Switch>
            <Route exact path="/">
              {loading ? <p>loading...</p> :
                <ReviewDisplay
                  totalReviews={totalReviews}
                  reviews={reviews}
                  page={page}
                  setPage={setPage}
                  currentUser={currentUser}
                  category={category}
                  setReviews={setReviews}
                  setLoading={setLoading}
                  setViewingReview={setViewingReview}
                  setReviewComments={setReviewComments} />}
            </Route>
            <Route exact path="/viewFullReview">
              {loading ? <p>loading...</p> :
                <ViewFullReview
                  viewingReview={viewingReview}
                  reviewComments={reviewComments}
                  setReviewComments={setReviewComments}
                  currentUser={currentUser} />}
            </Route>
          </Switch>
        </main> :
        <main id="notLoggedIn">
          <p id="loggedOutText">
            <span id="boldStart">Hey welcome to BoardGamiacs, </span>
            home of reviews for games that you've never even heard of! Don't google them though, you'll challenge the whole legitimacy if this website. If you don't know or have a username, feel free to use "tickle122" to log in, don't hold it against me, I didn't generate the names.
          </p>
        </main>}
    </div>
  );
};

export default App;
