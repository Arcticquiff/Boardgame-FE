import { useState } from 'react';
import '../Styles/reviewView.css'
import { addComment, deleteComment } from '../API';
import Votes from './SubComponents/Votes'

const ViewFullReview = ({ viewingReview, reviewComments, setReviewComments, currentUser }) => {
    const [addingComment, setAddingComment] = useState(false);
    const [newCommentBody, setNewCommentBody] = useState('');
    return (
        <div id="reviewAndComments">
            <div id="singleReview">
                <img src={viewingReview.review_img_url} alt="review snap" id="reviewPicture" />
                <section>
                    <p>{viewingReview.title}</p>
                    <div>
                        <p>Review by : {viewingReview.owner}</p>
                        <p>Game by : {viewingReview.designer}</p>
                    </div>
                    <p>{viewingReview.review_body}</p>
                    <Votes review={viewingReview} />
                </section>
            </div>
            <label htmlFor="commentForm">Comment :</label>
            {addingComment ?
                <p>submitting comment...</p> :
                <form onSubmit={event => addComment(event, viewingReview.review_id, setAddingComment, setReviewComments, currentUser, newCommentBody)} name="commentForm" id="commentForm">
                    <textarea name="commentBox" id="commentBox" cols="30" rows="4" onChange={event => setNewCommentBody(event.target.value)} required></textarea>
                    <br />
                    <button type="submit">Add comment</button>
                </form>}
            {reviewComments.length > 0 ?
                <ul className="comments">
                    {reviewComments.map(comment => {
                        return (
                            <li className="comment" key={comment.comment_id}>
                                <p>{comment.author}</p>
                                <p>{comment.body}</p>
                                <Votes comment={comment} />
                                {currentUser.username === comment.author && <button onClick={event => deleteComment(event, comment.comment_id, setReviewComments, viewingReview.review_id)}>delete</button>}
                            </li>
                        )
                    })}
                </ul> :
                <p>Nothing yet boi, feel free to add a review though!</p>}
        </div>
    );
};

export default ViewFullReview;