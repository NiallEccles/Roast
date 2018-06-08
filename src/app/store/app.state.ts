import { Basket } from './models/basket.model'

export interface BasketState{
    readonly basket: Basket[];
}