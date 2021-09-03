import { useState } from 'react';
import { reviewUpvote, reviewDownvote, commentDownvote, commentUpvote } from '../../API';
import '../../Styles/Votes.css'

const Votes = ({ review, comment }) => {
    const [hasClicked, setHasClicked] = useState(false);
    const [plusOrMinus, setPlusOrMinus] = useState(0);
    return (
        <div id="reviewVoteBox">
            {hasClicked ?
                <span aria-label="thumbs up, disabled" className="thumb">&#128077;</span> :
                <span aria-label="thumbs up" className="thumb" onClick={() => {
                    setHasClicked(true);
                    setPlusOrMinus(1);
                    if (review) {
                        reviewUpvote(review, setPlusOrMinus);
                    } else {
                        commentUpvote(comment, setPlusOrMinus);
                    };
                }
                }>&#128077;</span>}
            <span>{review ? review.votes + plusOrMinus : comment.votes + plusOrMinus}</span>
            {hasClicked ?
                <span aria-label="thumbs down, disabled" className="thumb">&#128078;</span> :
                <span aria-label="thumbs down, disabled" className="thumb" onClick={() => {
                    setHasClicked(true);
                    setPlusOrMinus(-1);
                    if (review) {
                        reviewDownvote(review, setPlusOrMinus);
                    } else {
                        commentDownvote(comment, setPlusOrMinus);
                    };
                }
                }>&#128078;</span>}
        </div>
    );
};

export default Votes;