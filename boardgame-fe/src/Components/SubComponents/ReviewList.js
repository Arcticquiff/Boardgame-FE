import functions from '../../API'
const { deleteReview } = functions;

const ReviewList = ({ reviews, currentUser, category, setReviews, page, setLoading }) => {
    return (
        <ul id="reviewList">
            {reviews.map(review => {
                return (
                    <li key={review.review_id} className="review">
                        <h3 className="reviewTitle">{review.title}</h3>
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