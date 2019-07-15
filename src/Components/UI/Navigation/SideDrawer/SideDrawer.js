import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../../Backdrop/Backdrop';

const sideDrawer = (props) => {
    let cssClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        cssClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Wrapper>
            <Backdrop show={props.open} cancel={props.closed}/>
            <div className={cssClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    );
}
export default sideDrawer;