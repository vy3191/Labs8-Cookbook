import React, { Component } from 'react';
import Logo from '../../designs/Logo/CookBookLogo.svg';
import { Link } from 'react-router-dom';
import auth from '../../Auth/Auth.js';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderIf from 'render-if';

// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';

// const USER_QUERY = gql`
//   {
//     user {
//       id
//       auth0Sub
//     }
//   }
// `


class Header extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
    }

    logout() {
        auth.logout();
    }

    onRender(path) {
    }

    render() {
        const { isAuthenticated } = auth;

        return ( 
            <div className='header-nav'>
                <div className='header'>
                    <Link className='link' to='/home'>
                        <img className='logo' src={Logo} alt='COOKBOOK logo'/>
                    </Link>
                    <span className="title">COOKBOOK</span>
                    {
                        isAuthenticated() && (
                        <div className="signout" onClick={this.logout.bind(this)}>
                            logout
                        </div>
                        )
                    }
                </div>
                <div className='nav'>
                    {renderIf(this.props.location.pathname !== '/home/create')(
                        <Link to='/home/create' className='create-nav'>CREATE</Link>
                    )}
                    {renderIf(this.props.location.pathname !== '/home/calendar')(
                        <Link to='/home/calendar' className='calendar-nav'>CALENDAR</Link>
                    )}
                    {renderIf(this.props.location.pathname !== '/home/dashboard')(    
                        <Link to='/home/dashboard' className='dashboard-nav'>GROCERY LIST</Link>
                    )}
                    {renderIf(this.props.location.pathname !== '/home/settings')(    
                        <Link to='/home/settings' className='settings-nav'>SETTINGS</Link>
                    )}
                    {renderIf(!this.props.location.pathname.includes('/home/recipe'))(    
                        <Link to='/home/recipes' className='recipes-nav'>RECIPES</Link>
                    )}
                </div>
                <div className='current-page'>
                    {renderIf(this.props.location.pathname === '/home/create')(
                        <Link to='/home/create' className='create-cp'>CREATE</Link>
                    )}
                    {renderIf(this.props.location.pathname === '/home/calendar')(
                        <Link to='/home/calendar' className='calendar-cp'>CALENDAR</Link>
                    )}
                    {renderIf(this.props.location.pathname === '/home/dashboard')(    
                        <Link to='/home/dashboard' className='dashboard-cp'>GROCERY LIST</Link>
                    )}
                    {renderIf(this.props.location.pathname === '/home/settings')(    
                        <Link to='/home/settings' className='settings-cp'>SETTINGS</Link>
                    )}
                    {renderIf(this.props.location.pathname.includes('/home/recipe'))(    
                        <Link to='/home/recipes' className='recipes-cp'>RECIPES</Link>
                    )}
                </div>
            </div> 
        );
    }
}
 
export default withRouter(Header);
