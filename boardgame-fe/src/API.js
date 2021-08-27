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
helperFunctions.getReviews = async (category, setReviews, page) => {
    let requestString = `/reviews?page=${page}&limit=5`
    if (category !== 'all') requestString += `&category=${category}`;
    try {
        const reviews = await gameApi.get(requestString);
        console.log(reviews.data.reviews);
        setReviews(reviews.data.reviews);
    } catch {

    }
}
export default helperFunctions;