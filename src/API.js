import axios from 'axios';

const gameApi = axios.create({ baseURL: 'https://tp-boardgame-api.herokuapp.com/api' });

const login = async (event, username, setCurrentUser, setNewUser, setLoggedIn, setUserNotFound, setLoggingIn) => {
    event.preventDefault();
    setLoggingIn(true);
    setUserNotFound(false);
    try {
        const user = await gameApi.get(`/users/${username}`);
        setCurrentUser(user.data.user);
        setLoggedIn(true);
        setNewUser('');
        setLoggingIn(false);
    } catch (err) {
        setUserNotFound(true);
        setLoggingIn(false);
    };
};
const logout = async (event, setCurrentUser, setLoggedIn) => {
    event.preventDefault();
    setCurrentUser({});
    setLoggedIn(false);
};
const getReviews = async (category, setReviews, page, setLoading, setTotalReviews) => {
    setLoading(true);
    let requestString = `/reviews?page=${page}&limit=5`
    if (category !== 'all') requestString += `&category=${category}`;
    try {
        const reviews = await gameApi.get(requestString);
        setTotalReviews(reviews.data.total_count);
        setReviews(reviews.data.reviews);
        setLoading(false);
    } catch {
        setLoading(false);
    }
}
const addNewReview = async (event, newReview, setAddReviewLoading, setDisplayAddReview, setAddReviewFail, setAddReviewSuccess, setReviews, setLoading, page, category) => {
    event.preventDefault();
    setAddReviewLoading(true);
    let requestString = `/reviews?page=${page}&limit=5`
    if (category !== 'all') requestString += `&category=${category}`;
    try {
        await gameApi.post('/reviews', newReview);
        setAddReviewLoading(false);
        setDisplayAddReview(false);
        setAddReviewSuccess(true);
        setLoading(true);
        const newReviews = await gameApi.get(requestString);
        setReviews(newReviews.data.reviews);
        setLoading(false);
    } catch (err) {
        setAddReviewLoading(false);
        setAddReviewFail(true);
    };
};
const deleteReview = async (event, review_id, category, setReviews, page, setLoading) => {
    event.preventDefault();
    setLoading(true);
    let requestString = `/reviews?page=${page}&limit=5`
    if (category !== 'all') requestString += `&category=${category}`;
    try {
        await gameApi.delete(`/reviews/${review_id}`);
        const newReviews = await gameApi.get(requestString);
        setReviews(newReviews.data.reviews);
        setLoading(false);
    } catch (err) {
        setLoading(false);
    }
};
const viewReview = async (event, review_id, setViewingReview, setLoading, setReviewComments) => {
    event.preventDefault();
    setLoading(true);
    try {
        const review = await gameApi.get(`/reviews/${review_id}`);
        const reviewComments = await gameApi.get(`/reviews/${review_id}/comments`);
        setViewingReview(review.data.review);
        setReviewComments(reviewComments.data.comments);
        setLoading(false);
    } catch (err) {
        setLoading(false);
    }
};
const addComment = async (event, review_id, setAddingComment, setReviewComments, currentUser, newCommentBody) => {
    event.preventDefault();
    setAddingComment(true);
    try {
        await gameApi.post(`/reviews/${review_id}/comments`, { username: currentUser.username, body: newCommentBody });
        const reviewComments = await gameApi.get(`/reviews/${review_id}/comments`);
        setReviewComments(reviewComments.data.comments);
        setAddingComment(false);
    } catch (err) {
        setAddingComment(false);
    }
}
const deleteComment = async (event, comment_id, setReviewComments, review_id, setDeletingComment) => {
    event.preventDefault();
    setDeletingComment(true);
    try {
        await gameApi.delete(`/comments/${comment_id}`)
        const reviewComments = await gameApi.get(`/reviews/${review_id}/comments`);
        setReviewComments(reviewComments.data.comments);
        setDeletingComment(false);
    } catch (err) {
        setDeletingComment(false);
    }
}
const reviewUpvote = async (review, setPlusOrMinus) => {
    try {
        await gameApi.patch(`/reviews/${review.review_id}`, { inc_votes: 1 });
    } catch (err) {
        setPlusOrMinus(0);
    };
};
const reviewDownvote = async (review, setPlusOrMinus) => {
    try {
        await gameApi.patch(`/reviews/${review.review_id}`, { inc_votes: -1 });
    } catch (err) {
        setPlusOrMinus(0);
    }
}
const commentUpvote = async (comment, setPlusOrMinus) => {
    try {
        gameApi.patch(`/comments/${comment.comment_id}`, { inc_votes: 1 });
    } catch (err) {
        setPlusOrMinus(0);
    }
}
const commentDownvote = async (comment, setPlusOrMinus) => {
    try {
        gameApi.patch(`/comments/${comment.comment_id}`, { inc_votes: -1 });
    } catch (err) {
        setPlusOrMinus(0);
    }
}
export { login, logout, getReviews, addNewReview, deleteReview, viewReview, addComment, deleteComment, reviewUpvote, commentDownvote, commentUpvote, reviewDownvote };