import axios from 'axios';
const helperFunctions = {};

const gameApi = axios.create({ baseURL: 'https://tp-boardgame-api.herokuapp.com/api' });

helperFunctions.login = async (event, username, setCurrentUser, setNewUser, setLoggedIn, setUserNotFound) => {
    event.preventDefault();
    setUserNotFound(false);
    try {
        const user = await gameApi.get(`/users/${username}`);
        setCurrentUser(user.data.user);
        setLoggedIn(true);
        setNewUser('');
    } catch (err) {
        setUserNotFound(true);
    };
};
helperFunctions.logout = async (event, setCurrentUser, setLoggedIn) => {
    event.preventDefault();
    setCurrentUser({});
    setLoggedIn(false);
};
helperFunctions.getReviews = async (category, setReviews, page, setLoading) => {
    setLoading(true);
    let requestString = `/reviews?page=${page}&limit=5`
    if (category !== 'all') requestString += `&category=${category}`;
    try {
        const reviews = await gameApi.get(requestString);
        console.log(reviews.data.reviews);
        setReviews(reviews.data.reviews);
        setLoading(false);
    } catch {
        setLoading(false);
    }
}
helperFunctions.addNewReview = async (event, newReviewTitle, newReviewBody, newReviewDesigner, newReviewCategory, currentUser, setAddReviewLoading, setDisplayAddReview, setAddReviewFail, setAddReviewSuccess) => {
    event.preventDefault();
    setAddReviewLoading(true);
    const newReview = {
        owner: currentUser.username, title: newReviewTitle, review_body: newReviewBody, designer: newReviewDesigner, category: newReviewCategory
    };
    try {
        const responseReview = await gameApi.post('/reviews', newReview);
        console.log(responseReview.data);
        setAddReviewLoading(false);
        setDisplayAddReview(false);
        setAddReviewSuccess(true);
    } catch (err) {
        console.log(err.response);
        setAddReviewLoading(false);
        setAddReviewFail(true);
    };
};
helperFunctions.deleteReview = async (event, review_id, category, setReviews, page, setLoading) => {
    event.preventDefault();
    try {
        await gameApi.delete(`/reviews/${review_id}`);
        helperFunctions.getReviews(category, setReviews, page, setLoading);
    } catch (err) {
        console.log(err.response);
    }
};
export default helperFunctions;