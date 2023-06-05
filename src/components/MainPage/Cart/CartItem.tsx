import {Button, ButtonGroup, Grid, IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";
import {IMenuItem} from "../../../models/menuItem.interface";

interface MyCartItemProps {
    cartItem: IMenuItem,
    removeItem: Function,
    increaseQuantity: Function,
    decreaseQuantity: Function
}

const CartItem = ({cartItem, removeItem, increaseQuantity, decreaseQuantity}: MyCartItemProps) => {
    const {_id, itemName, price, quantity} = cartItem
    return (
        <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={4} sm={6} md={6}>
                    <Typography variant="body1">
                        {itemName}
                    </Typography>
                    <Typography variant="body1" align="justify">
                        Price: {price*quantity} UAH
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={6} md={6}>
                    <ButtonGroup variant="text"
                                 size="small"
                                 aria-label="small outlined button group">
                        {quantity && <Button onClick={() => decreaseQuantity(_id)}>-</Button>}
                        {quantity && <Button disabled>{quantity}</Button>}
                        <Button onClick={() => increaseQuantity(_id)}>+</Button>
                    </ButtonGroup>
                    <IconButton
                        onClick={() => removeItem(_id)}
                    >
                        <Close/>
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};

export default CartItem;