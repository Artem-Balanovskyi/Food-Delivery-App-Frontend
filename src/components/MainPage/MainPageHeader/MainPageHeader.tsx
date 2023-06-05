import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import React from "react";
import {ICartState} from "../../../models/state.models/cartState.interface";

interface MyHeaderProps {
    cartPageState: ICartState,
    openCart: Function
}
function MainPageHeader({cartPageState, openCart}: MyHeaderProps) {

    const {cartItemsTotalQuantity} = cartPageState

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    Food Delivery App
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={() => openCart()}
                >
                    <Badge
                        color="secondary"
                        badgeContent={cartItemsTotalQuantity}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MainPageHeader
