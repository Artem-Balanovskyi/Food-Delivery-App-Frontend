import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import CustomerDetails from "./CustomerDetails";
import React from "react";
import {
    resetInputsAC, setCustomersAC, setOrdersAC,
    updateInputAC
} from "../../../store/reducers/orderReducer";
import {IOrder} from "../../../models/order.interface";
import {IOrderState} from "../../../models/state.models/orderState.interface";
import {ICartState} from "../../../models/state.models/cartState.interface";
import {ICustomer} from "../../../models/customer.interface";
import {
    calculateQuantityAndPriceAC,
    changeSnackMessageAC,
    openSnackAC,
    resetCartAC
} from "../../../store/reducers/cartReducer";
import axios from "axios";
import {IShopsState} from "../../../models/state.models/shopsState.interface";


let mapStateToProps = (state: IState) => {
    return {
        cartPageState: state.cartPageState,
        ordersPageState: state.ordersPageState,
        shopsPageState: state.shopsPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
            dispatch(updateInputAC(e.target.value, inputType))
        },
        onSubmitForm: (event: React.ChangeEvent<SubmitEvent>, ordersPageState: IOrderState,shopsPageState:IShopsState, cartPageState: ICartState) => {
            event.preventDefault();
            const {name, phone, email, address} = ordersPageState.inputsValues
            const {customers, orders} = ordersPageState
            const {activeShop} = shopsPageState
            const {cartItems, cartItemsTotalPrice} = cartPageState

            let newOrder: IOrder = {
                _id: orders.length ? orders.length + 1 : 1,
                shopName: activeShop ? activeShop.shopName : 'unknown',
                customerName: name,
                orderItems: [...cartItems],
                totalPrice: cartItemsTotalPrice,
                date: String(new Date()),
            }

            let newCustomer: ICustomer = {
                _id: customers.length ? customers.length + 1 : 1,
                name: name,
                email: email,
                phone: phone,
                address: address,
                orders: [{...newOrder, orderItems: [...newOrder.orderItems]}]
            }

            submitNewOrder(newOrder)

            if (customers.length > 0) {
                customers.map(customer => {
                    if (customer.email === email || customer.phone === phone) {
                        updateExistingCustomer(dispatch, customer, newOrder)
                        return customer
                    } else {
                        submitNewCustomer(dispatch, newCustomer)
                        return customer
                    }
                })
            } else {
                submitNewCustomer(dispatch, newCustomer)
            }

            function submitNewOrder (newOrder: IOrder) {
                axios
                    .post(`${process.env.REACT_APP_SERVER_URL}/orders`, {...newOrder})
                    .then((response) => response)
                    .catch((err) => console.log(err));
            }

            function submitNewCustomer (dispatch: Function, newCustomer: ICustomer) {
                axios
                    .post(`${process.env.REACT_APP_SERVER_URL}/customers`, {...newCustomer})
                    .then((response) => response)
                    .catch((err) => console.log(err));

                resetAfterSubmit(dispatch)
            }

            function updateExistingCustomer (dispatch: Function, customer: ICustomer, newOrder: IOrder) {
                axios
                    .put(`${process.env.REACT_APP_SERVER_URL}/customers/${customer._id}`, {orders: [...customer.orders, newOrder]})
                    .then((response) => response)
                    .catch((err) => console.log(err));

                resetAfterSubmit(dispatch)
            }
            function resetAfterSubmit (dispatch: Function) {
                dispatch(resetInputsAC())
                dispatch(resetCartAC())
                dispatch(calculateQuantityAndPriceAC())
            }
        },
        showSnackAfterSubmit: () => {
            dispatch(changeSnackMessageAC('Your order has been submitted successfully!'))
            dispatch(openSnackAC())
        },
        fetchCustomers: async (url: string) => {
            let customers: ICustomer[] = await axios.get(url)
                .then((response) => response.data.customers)
                .catch((err) => {
                    console.log(err)
                })
            if (customers) {
                dispatch(setCustomersAC(customers))

            }
        },
        fetchOrders: async (url: string) => {
            let orders: IOrder[] = await axios.get(url)
                .then((response) => response.data.orders)
                .catch((err) => {
                    console.log(err)
                })
            if (orders) {
                dispatch(setOrdersAC(orders))
            }
        }
    }
}

const CustomerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerDetails)

export default CustomerDetailsContainer;