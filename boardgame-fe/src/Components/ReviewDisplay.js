import subComponents from "./SubComponents/SubComponentExporter";
const { ReviewList } = subComponents;

const ReviewDisplay = ({ reviews, page, setPage, currentUser, category, setReviews, setLoading }) => {
    return (
        <section className="reviewDisplay">
            <ReviewList reviews={reviews} currentUser={currentUser} page={page} category={category} setReviews={setReviews} setLoading={setLoading} />
            {page === 1 ?
                <p>previous</p> :
                <p onClick={() => setPage(page => page - 1)}>previous</p>}
            <p onClick={() => setPage(page => page + 1)}>next</p>
        </section>
    );
};

export default ReviewDisplay;