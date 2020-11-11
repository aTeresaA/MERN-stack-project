import React, { useState, createContext } from 'react';

export const UserContext = createContext<any>(null)

export const UserProvider = (props: any) => {
    const [authenticatedUser, setAuthenticatedUser] = useState()

    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
        // talar om att UserProvider kan ha komponenter i sig
    )
}