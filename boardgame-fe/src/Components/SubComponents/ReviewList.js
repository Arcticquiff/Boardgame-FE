import { deleteReview, viewReview } from '../../API'
import '../../Styles/reviewList.css'
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, currentUser, category, setReviews, page, setLoading, setViewingReview }) => {
    return (
        <ul id="reviewList">
            {reviews.map(review => {
                return (
                    <li key={review.review_id} className="review">
                        <Link to="/viewFullReview"><h3 className="reviewTitle" onClick={event => viewReview(event, review.review_id, setViewingReview, setLoading)}>{review.title}</h3></Link>
                        <h4 className="reviewAuthor">{review.owner}</h4>
                        <h5 className="timeStamp">{review.created_at}</h5>
                        {currentUser.username === review.owner && <button onClick={event => deleteReview(event, review.review_id, category, setReviews, page, setLoading)}>delete</button>}
                    </li>
                )
            })}
        </ul>
    )
};

export default ReviewList;