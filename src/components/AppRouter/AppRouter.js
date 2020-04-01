import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import Header from '../Header/Header';
import AdminPage from '../AdminPage/AdminPage';
import UsersPage from '../UsersPage/UsersPage';
import HomePage from '../HomePage/HomePage';
import { toast } from 'react-toastify';
import PrivateRoute from './PrivateRoute';
import './AppRouter.scss';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const AppRouter = props => {
  useEffect(
    () => toast.configure({ position: toast.POSITION.BOTTOM_RIGHT }),
    []
  );

  return (
    <Router history={history}>
      <div className={classNames('AppRouter__Wrapper', `theme-${props.theme}`)}>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <PrivateRoute path="/admin" component={AdminPage} exact />
          <PrivateRoute path="/users" component={UsersPage} exact />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(AppRouter);
