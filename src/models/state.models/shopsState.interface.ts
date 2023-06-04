import {IShop} from "../shop.interface";
export interface IShopsState {
    searchValue: string
    shops: IShop[],
}