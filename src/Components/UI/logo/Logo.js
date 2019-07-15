import React from 'react';
import logoImg from '../../../Assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}><img src={logoImg} alt="Logo"/></div>
)

export default logo;