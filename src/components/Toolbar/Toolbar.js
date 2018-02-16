import React from 'react';

import classes from './Toolbar.css';
import SideNavBtn from './../SideNav/Toggler/Toggler'
import NavItems from './../NavLinks/NavItems';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div className = {classes.AccNav}>
            <SideNavBtn backDropClicked={props.sideNavToggler}/>
            <NavItems />
            
        </div>
        <ul style = {{"flexGrow": 0.8}} className = {classes.VerySmall}>
            <li>
                <span><i className="fa fa-wifi"></i> 100</span>
                <span className={classes.HiddenSmall}><i className="fa fa-link"></i>2,612,634</span>
                <span><i className="fa fa-refresh"></i> 45s</span>
            </li>
            <li>Mining: On</li>
        </ul>
        <div className={classes.CurNet}><span className={[classes.CurrBal,classes.HiddenXSmall].join(" ")} style={{"fontSize":"0.8rem", "marginRight":"10px"}}>100 Eth</span><span><i className="fa fa-circle"></i></span><a className={classes.DropdownBtn}> Ropston <span className={classes.HiddenSmall}>Test Net</span> <i className="fa fa-caret-down"></i></a></div>
    </header>
);

export default toolbar;