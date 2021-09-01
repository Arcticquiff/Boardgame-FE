import { useState } from 'react';
import { Link } from 'react-router-dom'
import { AddReviewPage } from './SubComponents/SubComponentExporter'

const NavBar = ({ setCategory, currentUser }) => {
    const [displayCategorySelector, setDisplayCategorySelector] = useState(false);
    const [displayAddReview, setDisplayAddReview] = useState(false);
    const [addReviewLoading, setAddReviewLoading] = useState(false);
    const [addReviewSuccess, setAddReviewSuccess] = useState(false);
    const [addReviewFail, setAddReviewFail] = useState(false);
    return (
        <nav>
            <Link to="/">Home</Link>
            <p id="addReviewDisplayer" onClick={
                () => {
                    setAddReviewSuccess(false);
                    setAddReviewFail(false);
                    setDisplayAddReview(current => !current);
                }
            }>Add a review</p>
            {addReviewLoading ?
                <p>submitting review...</p> :
                displayAddReview && <AddReviewPage currentUser={currentUser} setAddReviewLoading={setAddReviewLoading} setDisplayAddReview={setDisplayAddReview} setAddReviewFail={setAddReviewFail} setAddReviewSuccess={setAddReviewSuccess} />}
            {addReviewSuccess && <p>Great! thanks for your review</p>}
            {addReviewFail && <p>oops someone knocked the board over, try again</p>}
            <p id="categoryDisplayer" onClick={
                () => setDisplayCategorySelector(current => !current)
            }>Categories</p>
            {displayCategorySelector && <div id="categorySelect">
                <Link to="/"><p onClick={() => setCategory('all')} value="all">All</p></Link>
                <Link to="/"><p onClick={() => setCategory('strategy')} value="strategy">Strategy</p></Link>
                <Link to="/"><p onClick={() => setCategory('hidden-roles')} value="hidden-roles">Hidden roles</p></Link>
                <Link to="/"><p onClick={() => setCategory('dexterity')} value="dexterity">Dexterity</p></Link>
                <Link to="/"><p onClick={() => setCategory('push-your-luck')} value="push-your-luck">Push your luck</p></Link>
                <Link to="/"><p onClick={() => setCategory('roll-and-write')} value="roll-and-write">Roll and Write</p></Link>
                <Link to="/"><p onClick={() => setCategory('deck-building')} value="deck-building">Deck building</p></Link>
                <Link to="/"><p onClick={() => setCategory('engine-building')} value="engine-building">Engine building</p></Link>
            </div>}
        </nav>
    );
};

export default NavBar;