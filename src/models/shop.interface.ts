import {IMenuItem} from "./menuItem.interface";

export interface IShop {
    _id: string,
    shopName: string,
    logo: string,
    isActive: boolean,
    menu: IMenuItem[]
}