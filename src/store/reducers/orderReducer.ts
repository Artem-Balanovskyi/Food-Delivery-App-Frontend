import {IDispatchAction} from "../../models/dispatchAction.interface";
import {IOrderState} from "../../models/state.models/orderState.interface";
import {IOrder} from "../../models/order.interface";
import {ICustomer} from "../../models/customer.interface";

const SET_CUSTOMERS = 'ORDER:SET_CUSTOMERS'
const SET_ORDERS = 'ORDER:SET_ORDERS'
const ADD_NEW_ORDER = 'ORDER:ADD_NEW_ORDER'
const UPDATE_INPUT_VALUE = 'ORDER:UPDATE_INPUT_VALUE'
const ADD_NEW_CUSTOMER = 'ORDER:ADD_NEW_CUSTOMER'
const UPDATE_EXISTED_CUSTOMER = 'ORDER:UPDATE_EXISTED_CUSTOMER'
const RESET_INPUTS = 'ORDER:RESET_INPUTS'


const initialState: IOrderState = {
    inputsValues: {
        name: '',
        email: '',
        phone: '',
        address: ''
    },
    customers: [],
    orders: []
}

export const ordersReducer = (state: IOrderState = initialState, action: IDispatchAction) => {
    switch (action.type) {
        case SET_CUSTOMERS:
            if (action.customers)
                return {
                    ...state,
                    customers: action.customers
                }
            break
        case SET_ORDERS:
            if (action.orders)
                return {
                    ...state,
                    orders: [...action.orders]
                }
            break
        case ADD_NEW_ORDER:
            if (action.order) {
                return {
                    ...state,
                    orders: [...state.orders, action.order]
                }
            }
            break
        case ADD_NEW_CUSTOMER:
            if (action.customer) {
                return {
                    ...state,
                    customers: [...state.customers, action.customer]
                }
            }
            break
        case UPDATE_INPUT_VALUE:
            switch (action.inputType) {
                case 'name':
                    return {
                        ...state,
                        inputsValues: {...state.inputsValues, name: action.inputValue}
                    }
                case 'email':
                    return {
                        ...state,
                        inputsValues: {...state.inputsValues, email: action.inputValue}
                    }
                case 'phone':
                    return {
                        ...state,
                        inputsValues: {...state.inputsValues, phone: action.inputValue}
                    }
                case 'address':
                    return {
                        ...state,
                        inputsValues: {...state.inputsValues, address: action.inputValue}
                    }
                default:
                    return state
            }
        case  UPDATE_EXISTED_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(customer => {
                    if (customer._id === action.customerId) {
                        return {...customer, orders: [...customer.orders, {...action.order}]}
                    }
                    return customer
                })
            }
        case  RESET_INPUTS:
            return {
                ...state,
                inputsValues: {
                    ...state.inputsValues,
                    phone: '',
                    email: '',
                    address: '',
                    name: ''
                }
            }
        default:
            return state
    }
}


export const setCustomersAC = (customers: ICustomer[]) => ({type: SET_CUSTOMERS, customers})
export const setOrdersAC = (orders: IOrder[]) => ({type: SET_ORDERS, orders})
export const addNewOrderAC = (order: IOrder) => ({type: ADD_NEW_ORDER, order})
export const addNewCustomerAC = (customer: ICustomer) => ({type: ADD_NEW_CUSTOMER, customer})
export const updateInputAC = (inputValue: string, inputType: string) => ({
    type: UPDATE_INPUT_VALUE,
    inputValue,
    inputType
})
export const updateExistedCustomerAC = (customerId: number, order: IOrder) => ({
    type: UPDATE_EXISTED_CUSTOMER, customerId, order
})
export const resetInputsAC = () => ({type: RESET_INPUTS})

