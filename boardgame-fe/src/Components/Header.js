import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login, logout } from '../API';
import '../Styles/header.css'

const Header = ({ currentUser, setCurrentUser, loggedIn, setLoggedIn }) => {
    const history = useHistory();
    const [newUser, setNewUser] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);
    return (
        <header id="titleAndLogin">
            <Link to="/"><h1>Boardgamiacs</h1></Link>
            <form id="loginForm" onSubmit={loggedIn ?
                event => logout(event, setCurrentUser, setLoggedIn) :
                event => {
                    login(event, newUser, setCurrentUser, setNewUser, setLoggedIn, setUserNotFound)
                    history.push("/")
                }
            }>
                {loggedIn ?
                    <p>{currentUser.username}</p> :
                    <input id="loginUsername" type="text" placeholder="username" onChange={event => setNewUser(event.target.value)} value={newUser} required />}
                {loggedIn ?
                    <button id="logoutButton">log out</button> :
                    <button id="loginButton">log in</button>}
                {userNotFound && <p>Sorry, we couldn't find that user</p>}
            </form>
        </header>
    );
};
export default Header;