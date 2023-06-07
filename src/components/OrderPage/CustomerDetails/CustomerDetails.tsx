import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import MyInput from "./Inputs/MyInputs";
import {Button, Container, Stack, Typography} from "@mui/material";
import PhoneInput from "./Inputs/PhoneInput";
import {IOrderState} from "../../../models/state.models/orderState.interface";
import {ICartState} from "../../../models/state.models/cartState.interface";
import {useNavigate} from "react-router-dom";
import {IShopsState} from "../../../models/state.models/shopsState.interface";


interface MyCustomerDetailsProps {
    ordersPageState: IOrderState,
    cartPageState: ICartState,
    shopsPageState: IShopsState,
    onChangeInput: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void,
    onSubmitForm: Function,
    showSnackAfterSubmit: Function,
    fetchCustomers: Function,
    fetchOrders: Function
}

export default function CustomerDetails(props: MyCustomerDetailsProps) {
    const {
        ordersPageState,
        cartPageState,
        shopsPageState,
        onChangeInput,
        onSubmitForm,
        showSnackAfterSubmit,
        fetchCustomers,
        fetchOrders
    } = props
    const {name, phone, email, address} = ordersPageState.inputsValues
    const {isOrderButtonDisabled} = cartPageState
    const navigate = useNavigate()

    useEffect(() => {
        fetchCustomers(`${process.env.REACT_APP_SERVER_URL}customers`);
        fetchOrders(`${process.env.REACT_APP_SERVER_URL}orders`);
    }, [fetchCustomers, fetchOrders]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        onSubmitForm(event, ordersPageState, shopsPageState, cartPageState)
        navigate('/')
        showSnackAfterSubmit()
    }

    return (
        <Container sx={{mt: '1rem'}}>
            <Typography variant="h5" textAlign='center' marginBottom={2}>
                Customer Details:
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <MyInput label="Name" type="text" value={name} onChangeInput={onChangeInput}/>
                    <MyInput label="Email" type="email" value={email} onChangeInput={onChangeInput}/>
                    <PhoneInput value={phone} onChangeInput={onChangeInput}/>
                    <MyInput label="Address" type="text" value={address} onChangeInput={onChangeInput}/>
                    <Button type="submit" disabled={isOrderButtonDisabled} variant="contained">Submit</Button>
                </Stack>
            </form>
        </Container>
    );
}