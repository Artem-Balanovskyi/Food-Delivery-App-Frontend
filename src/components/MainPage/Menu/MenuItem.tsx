import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {IMenuItem} from "../../../models/menuItem.interface";

interface MyMenuItemProps {
    menuItem: IMenuItem,
}
const MenuItem = ({menuItem}: MyMenuItemProps) => {
    const {itemName, price, image} = menuItem;

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
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default MenuItem;