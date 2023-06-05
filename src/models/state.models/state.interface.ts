import {ICartState} from "./cartState.interface";
import {IShopsState} from "./shopsState.interface";
export interface IState {
    shopsPageState: IShopsState,
    cartPageState: ICartState,
}