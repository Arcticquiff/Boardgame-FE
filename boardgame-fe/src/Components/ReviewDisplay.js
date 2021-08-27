import subComponents from "./SubComponents/SubComponentExporter";
const { ReviewList } = subComponents;

const ReviewDisplay = ({ reviews, page, setPage }) => {
    return (
        <section className="reviewDisplay">
            <ReviewList reviews={reviews} />
            {page === 1 ?
                <p>previous</p> :
                <p onClick={() => setPage(page => page - 1)}>previous</p>}
            <p onClick={() => setPage(page => page + 1)}>next</p>
        </section>
    );
};

export default ReviewDisplay;