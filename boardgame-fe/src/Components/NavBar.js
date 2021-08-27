import { useState } from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ setCategory }) => {
    const [displayCategorySelector, setDisplayCategorySelector] = useState(false);
    return (
        <nav>
            <Link to="/addReviewPage" >Add a review</Link>
            <p id="categoryDisplayer" onClick={
                displayCategorySelector ?
                    () => setDisplayCategorySelector(false) :
                    () => setDisplayCategorySelector(true)
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