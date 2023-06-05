import {Alert, Snackbar, SnackbarCloseReason} from "@mui/material"
import React, {SyntheticEvent} from "react";
import {ICartState} from "../../../models/state.models/cartState.interface";

interface MySnackProps {
    cartPageState: ICartState,
    closeSnack: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void
}

function Snack({cartPageState, closeSnack}: MySnackProps) {

    const {isSnackOpened, snackMessage} = cartPageState

    return (
        <Snackbar
            open={isSnackOpened}
            onClose={closeSnack}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >{snackMessage}</Alert>
        </Snackbar>
    )
}

export default Snack
