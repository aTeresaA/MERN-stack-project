import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/HomeView';
import { Recipeview } from '../view/RecipeView';
import { SignInView } from '../view/SignInView';
import { UserContext } from '../shared/global/provider/UserProvider';
import RoutingPath from './RoutingPath';
import { ShareYourRecipeView } from '../view/ShareYourRecipeView';

export const Routing = (props: any) => {
    // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const blockRouteIfAuthenticated = (navigateToView: any) => {
        return authenticatedUser ? HomeView : navigateToView 
    }

    const blockRouteIfNotAuthenticated = (navigateToView: any) => {
        return (!authenticatedUser) ? SignInView : navigateToView
    }

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser();        
    }, )

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.recipeView} component={Recipeview} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.shareYourRecipeView} component={blockRouteIfNotAuthenticated(ShareYourRecipeView)} />
                <Route component={HomeView} />                
            </Switch>
        </Router>
    )
}