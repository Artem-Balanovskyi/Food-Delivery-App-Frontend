import {IMenuItem} from "../../models/menuItem.interface";
import {IDispatchAction} from "../../models/dispatchAction.interface";
import {ICartState} from "../../models/state.models/cartState.interface";

const ADD_ITEM = 'CART:ADD_ITEM'
const REMOVE_ITEM = 'CART:REMOVE_ITEM'
const INCREASE_QUANTITY = 'CART:INCREASE_QUANTITY'
const DECREASE_QUANTITY = 'CART:DECREASE_QUANTITY'
const CALCULATE_QUANTITY_AND_PRICE = 'CART:CALCULATE_QUANTITY_AND_PRICE'
const OPEN_CART = 'CART:OPEN_CART'
const CLOSE_CART = 'CART:CLOSE_CART'
const RESET_CART = 'CART:RESET_CART'
const OPEN_SNACK = 'CART:OPEN_SNACK'
const CLOSE_SNACK = 'CART:CLOSE_SNACK'
const CHANGE_SNACK_MESSAGE = 'CART:CHANGE_SNACK_MESSAGE'


const initialState: ICartState = {
    isCartOpened: false,
    isSnackOpened: false,
    snackMessage: 'Item is added to the cart!',
    cartItemsTotalQuantity: 0,
    cartItemsTotalPrice: 0,
    isOrderButtonDisabled: true,
    cartItems: []
}

export const cartReducer = (state: ICartState = initialState, action: IDispatchAction) => {
    switch (action.type) {
        case ADD_ITEM:
            if (action.menuItems?.length && action.menuItems?.length > 0)
                return {...state, cartItems: [...state.cartItems, ...action.menuItems]}
            break
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.itemId)
            }
        case INCREASE_QUANTITY:


            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item._id === action.itemId && item.quantity >= 1) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item._id === action.itemId && item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            }
        case CALCULATE_QUANTITY_AND_PRICE:
            return {
                ...state,
                cartItemsTotalQuantity: state.cartItems.reduce(
                    (total, cartItem) => total + cartItem.quantity, 0),
                cartItemsTotalPrice: state.cartItems.reduce(
                    (total, cartItem) => total + cartItem.quantity * cartItem.price, 0),
                isOrderButtonDisabled: state.cartItems.length <= 0
            }
        case OPEN_CART:
            return {
                ...state,
                isCartOpened: true
            }
        case CLOSE_CART:
            return {
                ...state,
                isCartOpened: false
            }
        case RESET_CART:
            return {
                ...state,
                cartItems: []
            }
        case OPEN_SNACK:
            return {
                ...state,
                isSnackOpened: true
            }
        case CLOSE_SNACK:
            return {
                ...state,
                isSnackOpened: false
            }
        case CHANGE_SNACK_MESSAGE:
            return {
                ...state,
                snackMessage: action.snackMessage
            }
        default:
            return state
    }
}


export const addCartItemAC = (menuItems: IMenuItem[]) => ({type: ADD_ITEM, menuItems})
export const removeCartItemAC = (itemId: string) => ({type: REMOVE_ITEM, itemId})
export const increaseQuantityAC = (itemId: string) => ({type: INCREASE_QUANTITY, itemId})
export const decreaseQuantityAC = (itemId: string) => ({type: DECREASE_QUANTITY, itemId})
export const calculateQuantityAndPriceAC = () => ({type: CALCULATE_QUANTITY_AND_PRICE})
export const openCartAC = () => ({type: OPEN_CART})
export const closeCartAC = () => ({type: CLOSE_CART})
export const resetCartAC = () => ({type: RESET_CART})
export const openSnackAC = () => ({type: OPEN_SNACK})
export const closeSnackAC = () => ({type: CLOSE_SNACK})
export const changeSnackMessageAC = (snackMessage: string) => ({type: CHANGE_SNACK_MESSAGE, snackMessage})
