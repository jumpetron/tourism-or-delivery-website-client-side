import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, Loading } = useAuth();
    if (Loading) {
        return <div className="spinner p-5 my-5">
            <Spinner animation="border" variant="dark" />
        </div>
    }



    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>
                }
            >
            </Route>
        </div>
    );
};

export default PrivateRoute;