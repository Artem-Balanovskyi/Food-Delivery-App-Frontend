import {ICustomer} from "../customer.interface";
import {IOrder} from "../order.interface";
import {IInputsValues} from "../inputsValues.interface";

export interface IOrderState {
    inputsValues: IInputsValues,
    customers: ICustomer[],
    orders: IOrder[]
}