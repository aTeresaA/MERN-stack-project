import React, { useContext } from 'react';
import { UserContext } from '../../shared/global/provider/UserProvider';
import { useHistory } from 'react-router-dom';
// import { SignInView } from '../../view/SignInView';
import './Profile.css';

export const Profile =  () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        history.push('/')
    }

    return (
        <div>
            <span className="displayUsername">{authenticatedUser}</span>
            <div onClick={() => logout()}>
                Logga ut
            </div>
        </div>
    )
}