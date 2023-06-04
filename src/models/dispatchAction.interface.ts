import {IShop} from "./shop.interface";
export interface IDispatchAction {
    type: string,
    shopId?: string,
    shops?: IShop[],
}