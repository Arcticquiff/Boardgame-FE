import { deleteReview, viewReview } from '../../API'
import '../../Styles/reviewList.css'
import { Link } from 'react-router-dom';
import { Votes } from './SubComponentExporter'


const ReviewList = ({ reviews, currentUser, category, setReviews, page, setLoading, setViewingReview, setReviewComments }) => {
    return (
        <ul id="reviewList">
            {reviews.map(review => {
                return (
                    <li key={review.review_id} className="review">
                        <h3 className="reviewTitle" onClick={event => viewReview(event, review.review_id, setViewingReview, setLoading, setReviewComments)}> <Link to="/viewFullReview" >{review.title}</Link></h3>
                        <h4 className="reviewAuthor">{review.owner}</h4>
                        <h5 className="timeStamp">{review.created_at.slice(0, 10)}</h5>
                        <Votes review={review} />
                        {currentUser.username === review.owner && <button onClick={event => deleteReview(event, review.review_id, category, setReviews, page, setLoading)}>delete</button>}
                    </li>
                )
            })}
        </ul>
    )
};

export default ReviewList;