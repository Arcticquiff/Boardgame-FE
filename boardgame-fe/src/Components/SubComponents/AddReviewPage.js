import { useState } from 'react';
import { addNewReview } from '../../API'

const AddReviewPage = ({ currentUser, setAddReviewLoading, setDisplayAddReview, setAddReviewFail, setAddReviewSuccess }) => {
    const [newReviewTitle, setNewReviewTitle] = useState('');
    const [newReviewBody, setNewReviewBody] = useState('');
    const [newReviewDesigner, setNewReviewDesigner] = useState('');
    const [newReviewCategory, setNewReviewCategory] = useState('');
    return (
        <form onSubmit={event => {
            const newReview = {
                owner: currentUser.username, title: newReviewTitle, review_body: newReviewBody, designer: newReviewDesigner, category: newReviewCategory
            };
            addNewReview(event, newReview, setAddReviewLoading, setDisplayAddReview, setAddReviewFail, setAddReviewSuccess)
        }}>
            <label htmlFor="newReviewTitle">What's your review called?</label>
            <br />
            <input type="text" id="newReviewTitle" name="newReviewTitle" value={newReviewTitle} onChange={event => setNewReviewTitle(event.target.value)} required />
            <br />
            <label htmlFor="newReviewBody">So.... how was it?</label>
            <br />
            <textarea id="newReviewBody" name="newReviewBody" rows="5" cols="30" value={newReviewBody} onChange={event => setNewReviewBody(event.target.value)} required />
            <br />
            <label htmlFor="newReviewDesigner">And who made the game?</label>
            <br />
            <input type="text" id="newReviewDesigner" name="newReviewDesigner" value={newReviewDesigner} onChange={event => setNewReviewDesigner(event.target.value)} required />
            <br />
            <label htmlFor="newReviewCategory">Lastly, which category best fits this game?</label>
            <br />
            <select name="newReviewCategory" id="newReviewCategory" value={newReviewCategory} onChange={event => setNewReviewCategory(event.target.value)} required>
                <option value="">choose a category</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push your luck</option>
                <option value="roll-and-write">Roll and Write</option>
                <option value="deck-building">Deck building</option>
                <option value="engine-building">Engine building</option>
            </select>
            <br />
            <button type="submit">Submit review</button>
        </form>
    )
};

export default AddReviewPage;