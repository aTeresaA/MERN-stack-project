import React, { useContext } from 'react';
import './NavigationBar.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../shared/global/provider/UserProvider';
import { Profile } from '../profile/Profile';
import RoutingPath from '../../routes/RoutingPath';

export const NavigationBar = () => {
    // skapa en referens
    const history = useHistory();
    // useHistory-hooken för att kunna navigera runt, kommer med rrd
    // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const displayUserIfAuthenticated = () => {
        return (
        (authenticatedUser) 
        ?  <div className="profile"><Profile /></div>
        : <span className="signIn" onClick={ () => history.push(RoutingPath.signInView) }>Logga in</span>
        )
    }

    return (
        <div className="navigationBarContainer">
            <span className="home" onClick={ () => 
                history.push(RoutingPath.homeView) }>Hem</span>
            <span className="recipes" onClick={ () => 
                history.push(RoutingPath.recipeView) }>Recept</span>
            <span className="shareyourrecipes" onClick={ () => 
                history.push(RoutingPath.shareYourRecipeView) }>Dela med dig av recept/tips</span>
            {displayUserIfAuthenticated()}
        </div>    
    )// onClick ska ta emot en callback
    // history push 
}