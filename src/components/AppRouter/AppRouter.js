import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import Header from '../Header/Header';
import AdminPage from '../AdminPage/AdminPage';
import UsersPage from '../UsersPage/UsersPage';
import './AppRouter.scss';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div className={classNames('AppRouter__Wrapper', `theme-${props.theme}`)}>
        <Header />
        <Switch>
          <Route path="/admin" component={AdminPage} exact />
          <Route path="/users" component={UsersPage} exact />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(AppRouter);
