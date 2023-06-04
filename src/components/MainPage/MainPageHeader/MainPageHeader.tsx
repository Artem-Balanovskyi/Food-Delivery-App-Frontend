import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import React from "react";


function MainPageHeader() {

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
                >
                    <Badge
                        color="secondary"
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MainPageHeader
