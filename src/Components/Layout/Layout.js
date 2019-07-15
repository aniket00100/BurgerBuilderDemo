import React, {Component} from 'react';
import Wrapper from '../hoc/wrapper';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
// import Logo from '../UI/logo/Logo'
import Toolbar from '../UI/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerShowHandler = () => {
        console.log(`${this.state.showSideDrawer} Menu clicked`);
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
        console.log(`${this.state.showSideDrawer} after Menu clicked`);
    }
    
    render() {
        return (
            <Wrapper>
                <Toolbar clicked={this.sideDrawerShowHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div className={classes.Content}>
                    <BurgerBuilder />
                </div>
            </Wrapper>
        )
    }
}

export default Layout;