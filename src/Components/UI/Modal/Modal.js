import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../hoc/wrapper';

const modal = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show} cancel={props.modalCancel} closed={props.cancel}/>
            <div style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'}}
                className={classes.Modal}>
                {props.children}
            </div>
        </Wrapper>
    )
}
export default modal;