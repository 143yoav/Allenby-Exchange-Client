import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NaviLink from '../common/NaviLink/NaviLink';
import Toggle from '../common/Toggle/Toggle';
import { updateTheme } from '../../actions/theme';
import './Header.scss';

const Header = props => {
  const location = useLocation();

  return (
    <div className="Header__Wrapper">
      <span className="Header__Title">Allenby Exchange</span>
      <div className="Header__Theme">
        <Toggle
          checkedLabel="Light"
          uncheckedLabel="Dark"
          isChecked={props.isLight}
          onChange={checked => props.updateTheme(checked)}
        />
      </div>
      <div className="Header__Navigation">
        <NaviLink
          to={'/users'}
          value="Users"
          isSelected={location.pathname == '/users'}
        />
        <NaviLink
          to={'/admin'}
          value="Admin"
          isSelected={location.pathname == '/admin'}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLight: state.theme == 'light'
});

const mapDispatchToProps = dispatch => ({
  updateTheme: theme => dispatch(updateTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
