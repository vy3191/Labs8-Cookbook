import React, { Component } from 'react';
import Logo from '../../designs/Logo/CookBookLogo.svg';
import auth from '../../Auth/Auth.js';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPhoneNav: false,
        };
    }

    logout() {
        auth.logout();
    }

    //change routes on nav click
    handleRedirect = (path) => {
        this.props.history.push(path);
    }

    //change routes on nav click
    //if the user clicks on the current page it will toggle the nav bar
    handlePhoneRedirect = (path) => {
        if (this.props.location.pathname.includes(path)) this.togglePhoneNav();
        else this.props.history.push(path);
    }

    //determine whether a nav item is active, shown, or hidden
    handlePhoneNavClass = (path) => {
        if (this.props.location.pathname.includes(path)) {
            return `${path}-phone-nav-active`
        }
        if (this.state.showPhoneNav) {
            return `${path}-phone-nav-show`
        }
        return 'phone-nav-hide'
    }

    //toggle the expanded phone nav bar
    togglePhoneNav = () => {
        this.setState({showPhoneNav: !this.state.showPhoneNav})
    }

    //determine the className of the phone toggle button for appropriate color change
    handleTogglePhoneNavClass = () => {
        if (this.props.location.pathname.includes('create')) return 'create-toggle-phone-nav';
        if (this.props.location.pathname.includes('recipe')) return 'recipe-toggle-phone-nav';
        if (this.props.location.pathname.includes('calendar')) return 'calendar-toggle-phone-nav';
        if (this.props.location.pathname.includes('dashboard')) return 'dashboard-toggle-phone-nav';
        if (this.props.location.pathname.includes('settings')) return 'settings-toggle-phone-nav';
    }

    //determine if a navbar item should go across the entire screen or not
    handleNormalNavClass = (path) => {
        if (this.props.location.pathname.includes(path)) {
            return `${path}-normal-nav-active`
        }
        return `${path}-normal-nav-inactive`
    }

    render() {

        return (

            <div className='header-nav'>

                <div className='header-container'>
                    <div className='header'>

                        <img className='logo' src={Logo} alt='logo'/>

                        <p className="title">COOKBOOK</p>

                        <div onClick={this.logout.bind(this)} className='logout'>logout</div>

                    </div>
                </div>
                
                <div className='nav'>

                    <div className='phone-nav'>
                        <div className='links'>
                            <p onClick={() => this.handlePhoneRedirect('/home/create')} className={this.handlePhoneNavClass('create')}>CREATE</p>
                            <p onClick={() => this.handlePhoneRedirect('/home/recipes')} className={this.handlePhoneNavClass('recipe')}>RECIPES</p>
                            <p onClick={() => this.handlePhoneRedirect('/home/calendar')} className={this.handlePhoneNavClass('calendar')}>CALENDAR</p>
                            <p onClick={() => this.handlePhoneRedirect('/home/dashboard')} className={this.handlePhoneNavClass('dashboard')}>GROCERY LIST</p>
                            <p onClick={() => this.handlePhoneRedirect('/home/settings')} className={this.handlePhoneNavClass('settings')}>SETTINGS</p>
                        </div>
                        <div onClick={() => this.togglePhoneNav()} className={this.handleTogglePhoneNavClass()}>...</div>
                    </div>

                    <div className='normal-nav'>
                        <p onClick={() => this.handleRedirect('/home/create')} className={this.handleNormalNavClass('create')}>CREATE</p>
                        <p onClick={() => this.handleRedirect('/home/recipes')} className={this.handleNormalNavClass('recipe')}>RECIPES</p>
                        <p onClick={() => this.handleRedirect('/home/calendar')} className={this.handleNormalNavClass('calendar')}>CALENDAR</p>
                        <p onClick={() => this.handleRedirect('/home/dashboard')} className={this.handleNormalNavClass('dashboard')}>GROCERY LIST</p>
                        <p onClick={() => this.handleRedirect('/home/settings')} className={this.handleNormalNavClass('settings')}>SETTINGS</p>
                    </div>
                    
                </div>

            </div>

        );
    }
}
 
export default withRouter(Header);
