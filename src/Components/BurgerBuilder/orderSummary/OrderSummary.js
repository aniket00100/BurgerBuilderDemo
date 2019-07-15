import React from 'react';
import Wrapper from '../../hoc/wrapper';

const orderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients).map(igName => {
        return (
            <li key={igName}><span style={{fontWeight: 600, textTransform: 'capitalize'}}>{igName}</span>: {props.ingredients[igName]}</li>)
    });
    return (
        <Wrapper>
            <h3>Please check your order</h3>
            <p>Your order contains:</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Total Cost: <strong>₹{props.price}</strong></p>
        </Wrapper>
    )
}

export default orderSummary;