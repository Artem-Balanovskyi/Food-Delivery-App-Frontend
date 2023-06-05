import {ICartState} from "./cartState.interface";
import {IShopsState} from "./shopsState.interface";
import {IOrderState} from "./orderState.interface";
export interface IState {
    shopsPageState: IShopsState,
    cartPageState: ICartState,
    ordersPageState: IOrderState
}