import {IShop} from "./shop.interface";
import {IMenuItem} from "./menuItem.interface";
import {IOrder} from "./order.interface";
import {ICustomer} from "./customer.interface";

export interface IDispatchAction {
    type: string,
    shopId?: string,
    shops?: IShop[],
    menuItems?: IMenuItem[],
    cartItems?: IMenuItem[],
    itemId?: string,
    searchValue?: string,
    inputValue?: string,
    inputType?: string,
    customerId?: number,
    customer?: ICustomer,
    customers?: ICustomer[],
    order?: IOrder,
    orders?: IOrder[],
    snackMessage?: string
}