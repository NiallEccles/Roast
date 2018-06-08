import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Basket } from './../models/basket.model'

export const ADD_ITEM = '[BASKET] Add'
export const REMOVE_ITEM = '[BASKET] Remove'

export class AddBasket implements Action {
    readonly type = ADD_ITEM

    constructor(public payload: Basket){}
}

export class RemoveBasket implements Action {
    readonly type = REMOVE_ITEM

    constructor(public payload: number){}
}

export type Actions =  AddBasket | RemoveBasket