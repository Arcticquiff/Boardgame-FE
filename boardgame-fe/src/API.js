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

export default helperFunctions;