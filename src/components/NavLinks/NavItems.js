import React, { Fragment } from 'react';

import NavigationItem from './NavLink';
import classes from './NavItems.css'
const navItems = ( props ) => (
    <Fragment>
        <NavigationItem link="/" exact><i className="fa fa-envelope-open"></i><span className={classes.HiddenSmall}> Wallet</span></NavigationItem>
        <NavigationItem link="/contracts"><i className="fa fa-file-text-o"></i><span className={classes.HiddenSmall}> Contracts</span></NavigationItem>
    </Fragment>
);

//can be used to display selective routes
/* props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null */
/* !props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>*/

export default navItems;