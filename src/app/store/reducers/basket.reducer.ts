import { Action } from '@ngrx/store'
import { Basket } from './../models/basket.model'
import * as BasketActions from './../actions/basket.actions' 

const initalState: Basket = {
    item: '',
    price: ''
}

export function reducer(state: Basket[] = [], action: BasketActions.Actions){
    switch(action.type){
        case BasketActions.ADD_ITEM:
            return [...state, action.payload];
        case BasketActions.REMOVE_ITEM:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}