import React, { useState, useContext } from 'react';
// useState anv för att spara och uppdatera värden: importera och deklarera den
// tar in en referens för värdet som den ska ha och en funktion för att uppdatera värdet
// const [referens, funktion] = useState(initialt värede);
import { UserContext } from '../shared/global/provider/UserProvider';
import { useHistory } from "react-router-dom";

export const SignInView = () => {
    //skapar en referens
    const history = useHistory();
    const [username, setUsername] = useState<any>();
    // eslint-disable-next-line
    const [password, setPassword] = useState<any>();
    // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const logIn = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push('/')
    }

    return (
        <div>
            <span>Användare:</span>
            <input onChange={e => setUsername(e.target.value)}/><br />
            <span>Lösenord:</span>
            <input type="password" onChange={e => setPassword(e.target.value)}/><br />
            <button onClick={() => logIn()}>Logga in</button>
        </div>
    )
}