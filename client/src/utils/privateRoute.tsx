import * as React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { RootState } from 'store/rootReducer';

// import { useAppContext } from 'containers/App/AppContext';

const PrivateRoute: React.FC<RouteProps & { component: Component }> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/sign-in', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
