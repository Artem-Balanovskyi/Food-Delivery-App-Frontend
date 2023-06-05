import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {IMenuItem} from "../../../models/menuItem.interface";
import {ICartState} from "../../../models/state.models/cartState.interface";

interface MyMenuItemProps {
    cartPageState: ICartState,
    menuItem: IMenuItem,
    addItem: Function
}
const MenuItem = ({menuItem, addItem, cartPageState}: MyMenuItemProps) => {
    const {itemName, price, image} = menuItem;

    const {cartItems} = cartPageState

    const indexInCart = cartItems.findIndex(
        (item: IMenuItem) => item._id === menuItem._id
    );

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{height: '100%',}}>
                <CardMedia
                    image={image}
                    component="img"
                    alt={itemName}
                    title={itemName}
                    sx={{height: 230}}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        {itemName}
                    </Typography>
                    <Typography variant="body1">Price: {price} UAH</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() => addItem(menuItem, indexInCart)}
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default MenuItem;