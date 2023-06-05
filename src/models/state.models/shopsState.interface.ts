import {IShop} from "../shop.interface";
import {IMenuItem} from "../menuItem.interface";

export interface IShopsState {
    activeShop?: IShop,
    activeMenu: IMenuItem[],
    searchValue: string
    shops: IShop[],
}