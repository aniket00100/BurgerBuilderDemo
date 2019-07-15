import React from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
    let changedIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
            return (<BurgerIngredient key={ingredient + i} type={ingredient}/>)
        })}).reduce((total, element) => {
            return total.concat(element)
        }, []);
    
    if (changedIngredients.length === 0) {
        changedIngredients = <p>Please start adding layers!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {changedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;