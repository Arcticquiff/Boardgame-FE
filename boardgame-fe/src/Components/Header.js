import { useState } from "react";
import functions from '../API';
const { login, logout } = functions;

const Header = ({ currentUser, setCurrentUser, loggedIn, setLoggedIn }) => {
    const [newUser, setNewUser] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);
    return (
        <header id="titleAndLogin">
            <h1>Boardgamiacs</h1>
            <form id="loginForm" onSubmit={loggedIn ?
                event => logout(event, setCurrentUser, setLoggedIn) :
                event => login(event, newUser, setCurrentUser, setNewUser, setLoggedIn, setUserNotFound)}>
                {loggedIn && <img src={currentUser.avatarUrl} alt="User Avatar" />}
                {loggedIn ?
                    <p>{currentUser.username}</p> :
                    <input id="loginUsername" type="text" placeholder="username" onChange={event => setNewUser(event.target.value)} value={newUser} />}
                {loggedIn ?
                    <button id="logoutButton">log out</button> :
                    <button id="loginButton">log in</button>}
                {userNotFound && <p>Sorry, we couldn't find that user</p>}
            </form>
        </header>
    );
};
export default Header;