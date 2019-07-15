import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import OrderSummary from './orderSummary/OrderSummary';
import Modal from '../UI/Modal/Modal';
import Wrapper from '../hoc/wrapper';
import Button from '../UI/Button/Button';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 20,
    mutton: 45,
    chicken: 35
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            mutton: 0,
            chicken: 0,
            cheese: 0
        },
        burgerPrice: 30,
        purchasable: false,
        continuePurchase: false
    }

    updatePurchasableHandler = (ingredient) => {
        const sum = Object.keys(ingredient).map((igName) => {
            return ingredient[igName]
        }).reduce ((s, element) => {
            return s + element;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    addLayerHandler = (type) => {
        const currentLayers = {...this.state.ingredients};
        currentLayers[type] += 1;
        const currentPrice = this.state.burgerPrice;
        const newPrice = currentPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: currentLayers, burgerPrice: newPrice});
        this.updatePurchasableHandler(currentLayers);        
    }

    removeLayerHandler = (type) => {
        const currentLayers = {...this.state.ingredients};
        currentLayers[type] -= 1;
        const currentPrice = this.state.burgerPrice;
        const newPrice = currentPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: currentLayers, burgerPrice: newPrice});
        this.updatePurchasableHandler(currentLayers);
    }

    purchaseContinueHandler = () => {
        alert('With this click the order will be forwarded to the order completion page.')
    }

    purchaseCancelHandler = () => {
        this.setState({continuePurchase: false});
    }

    orderNowHandler = () => {
        this.setState({continuePurchase: true});
    }

    render () {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log(disabledInfo);
        return (
            <Wrapper>
                <Modal show={this.state.continuePurchase} modalCancel={this.purchaseCancelHandler} closed={this.purchaseCancelHandler}>
                    <OrderSummary
                    ingredients={this.state.ingredients}
                    price={this.state.burgerPrice}/>
                    <Button type="Danger" clicked={this.purchaseCancelHandler}>Cancel</Button>
                    <Button type="Success" clicked={this.purchaseContinueHandler}>Continue</Button>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.burgerPrice}
                    added={this.addLayerHandler}
                    removed={this.removeLayerHandler}
                    purchasable={this.state.purchasable}
                    orderNow={this.orderNowHandler}
                    disabledInfo={disabledInfo}/>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;