const ReviewList = ({ reviews }) => {
    return (
        <ul id="reviewList">
            {reviews.map(review => {
                return (
                    <li key={review.title} className="review">
                        <h3 className="reviewTitle">{review.title}</h3>
                        <h4 className="reviewAuthor">{review.owner}</h4>
                        <h5 className="timeStamp">{review.created_at}</h5>
                    </li>
                )
            })}
        </ul>
    )
};

export default ReviewList;