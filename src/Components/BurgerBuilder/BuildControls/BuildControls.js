import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const buildControls = (props) => {
    const layers = [
        {name: "Salad", type: "salad"},
        {name: "Chicken", type: "chicken"},
        {name: "Mutton", type: "mutton"},
        {name: "Cheese", type: "cheese"},
    ]
    return (
        <div className={classes.BuildControls}>
            <p>CURRENT PRICE: <strong>₹{props.price}</strong></p>
            {layers.map(layer => {
                return <BuildControl
                        key={layer.type}
                        name={layer.name}
                        added={() => props.added(layer.type)}
                        removed={() => props.removed(layer.type)}
                        disabled={props.disabledInfo[layer.type]}
                        />
            })}
            <button className={classes.OrderButton} onClick={props.orderNow} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;