import { ReviewList } from "./SubComponents/SubComponentExporter";

const ReviewDisplay = ({ reviews, page, setPage, currentUser, category, setReviews, setLoading, setViewingReview, setReviewComments, totalReviews }) => {
    return (
        <section className="reviewDisplay">
            <ReviewList reviews={reviews} currentUser={currentUser} page={page} category={category} setReviews={setReviews} setLoading={setLoading} setViewingReview={setViewingReview} setReviewComments={setReviewComments} />
            <button onClick={() => setPage(page => page - 1)} disabled={page === 1 ? true : false}>previous</button>
            <button onClick={() => setPage(page => page + 1)} disabled={(page * 5) >= totalReviews ? true : false}>next</button>
        </section>
    );
};

export default ReviewDisplay;