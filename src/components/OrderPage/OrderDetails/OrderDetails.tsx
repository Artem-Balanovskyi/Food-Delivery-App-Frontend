import {Box, Container, Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {ICartState} from "../../../models/state.models/cartState.interface";
import CartItemContainer from "../../MainPage/Cart/CartItemContainer";

interface MyOrderDetailsProps {
    cartPageState: ICartState
}

export default function OrderDetails({cartPageState}: MyOrderDetailsProps) {

    const {cartItems} = cartPageState

    return (
        <Container sx={{mt: '1rem'}}>
            <Typography variant="h5" textAlign='center' marginBottom={2}>
                Order Details:
            </Typography>
            <Paper elevation={5} sx={{margin: '10px'}}>
                <Box minHeight='28vh' sx={{padding: '30px 20px'}}>
                    {cartItems.map(item => <CartItemContainer cartItem={item} key={item._id}/>)}
                </Box>
                <Stack direction='row' justifyContent='space-between' marginTop={2}>
                    <Typography variant="h5" sx={{margin: '20px 20px'}}>
                        Total Price: {' '}
                        {cartItems.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                        }, 0)}{' '}
                        UAH
                    </Typography>
                </Stack>
            </Paper>
        </Container>
    );
}