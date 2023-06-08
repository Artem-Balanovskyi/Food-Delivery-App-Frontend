import React from "react";
import {Grid, Stack} from "@mui/material";
import OrderDetailsContainer from "../components/OrderPage/OrderDetails/OrderDetailsContainer";
import CustomerDetailsContainer from "../components/OrderPage/CustomerDetails/CustomerDetailsContainer";
import OrderPageHeader from "../components/OrderPage/OrderPageHeader/OrderPageHeader";

import {Map} from '../components/OrderPage/GoogleMaps/Map'

export function OrderPage() {

    return (
        <>
            <OrderPageHeader/>
            <Stack spacing={2}>
                <Map/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8}>
                        <OrderDetailsContainer/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomerDetailsContainer/>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}