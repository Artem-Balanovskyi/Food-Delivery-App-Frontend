import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"
import {ArrowBack} from "@mui/icons-material"
import React from "react";

function OrderPageHeader() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    Order Confirmation
                </Typography>
                <IconButton href="/" color="inherit">
                    <ArrowBack/>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{flexGrow: 1}}
                    >
                        Back
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default OrderPageHeader
