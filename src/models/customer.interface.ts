import {IOrder} from "./order.interface";

export interface ICustomer {
    _id: number,
    name: string,
    email: string,
    phone: string,
    address: string
    orders: IOrder[]
}