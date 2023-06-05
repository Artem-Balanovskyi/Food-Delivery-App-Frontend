import React from "react";
import {Grid} from "@mui/material";
import OrderDetailsContainer from "../components/OrderPage/OrderDetails/OrderDetailsContainer";
import CustomerDetailsContainer from "../components/OrderPage/CustomerDetails/CustomerDetailsContainer";
import OrderPageHeader from "../components/OrderPage/OrderPageHeader/OrderPageHeader";

export function OrderPage() {

    return (
        <>
            <OrderPageHeader/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <OrderDetailsContainer/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomerDetailsContainer/>
                </Grid>
            </Grid>
        </>
    )
}