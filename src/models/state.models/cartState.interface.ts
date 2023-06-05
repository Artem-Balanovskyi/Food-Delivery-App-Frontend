import {IMenuItem} from "../menuItem.interface";

export interface ICartState {
    isCartOpened: boolean,
    isSnackOpened: boolean,
    isOrderButtonDisabled: boolean,
    cartItemsTotalQuantity: number,
    cartItemsTotalPrice: number,
    cartItems: IMenuItem[]
}