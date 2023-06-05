import {IShop} from "./shop.interface";
import {IMenuItem} from "./menuItem.interface";
export interface IDispatchAction {
    type: string,
    shopId?: string,
    shops?: IShop[],
    menuItems?: IMenuItem[],
    itemId?: string,
    searchValue?: string,
}