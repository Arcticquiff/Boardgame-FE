import subComponents from "./SubComponents/SubComponentExporter";
const { ReviewList } = subComponents;

const ReviewDisplay = ({ reviews }) => {
    return (
        <section className="reviewDisplay">
            <ReviewList reviews={reviews} />
        </section>
    );
};

export default ReviewDisplay;