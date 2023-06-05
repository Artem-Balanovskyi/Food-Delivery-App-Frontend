import React from "react";
import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Stack,
    Typography
} from "@mui/material";
import {HighlightOff, ShoppingBasket} from "@mui/icons-material";
import {ICartState} from "../../../models/state.models/cartState.interface";
import CartItemContainer from "./CartItemContainer";

interface MyCartProps {
    cartPageState: ICartState
    closeCart: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
    onClickClose: Function
}

const Cart = ({cartPageState, closeCart, onClickClose}: MyCartProps) => {
    const {cartItems, isCartOpened, cartItemsTotalPrice, isOrderButtonDisabled} = cartPageState

    return (

        <Drawer
            anchor="right"
            open={isCartOpened}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Cart"/>
                    <ListItemIcon>
                        <HighlightOff onClick={() => onClickClose()}/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>

                {!cartItems.length ? (
                    <ListItem>The cart is empty!</ListItem>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <CartItemContainer
                                cartItem={item}
                                key={item._id}/>
                        ))}
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                Total price: {cartItemsTotalPrice} UAH
                            </Typography>
                        </ListItem>

                    </>
                )}
                <Stack>
                    <Button
                        href="/order"
                        variant="contained"
                        disabled={isOrderButtonDisabled}
                        onClick={() => onClickClose()}
                    >
                        Place your order
                    </Button>
                </Stack>
            </List>
        </Drawer>
    )
}

export default Cart
