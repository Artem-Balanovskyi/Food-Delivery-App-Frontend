import {IMenuItem} from "./menuItem.interface";

export interface IOrder {
    _id: number,
    shopName: string,
    customerName: string,
    orderItems: IMenuItem[],
    totalPrice: number
    date: string,
}