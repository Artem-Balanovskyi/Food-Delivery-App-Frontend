import { Grid } from '@mui/material';
import MenuItem from './MenuItem';
import {IShopsState} from "../../../models/state.models/shopsState.interface";
import {IMenuItem} from "../../../models/menuItem.interface";
import {ICartState} from "../../../models/state.models/cartState.interface";

interface MyMenuProps {
    shopsPageState: IShopsState,
    cartPageState: ICartState,
    addItem: Function
}
const Menu = ({ shopsPageState, cartPageState, addItem }: MyMenuProps) => {

    const { activeMenu} = shopsPageState

    return (
        <Grid container spacing={2}>
            {
                activeMenu.map((item: IMenuItem) => (
                    <MenuItem key={item._id} addItem={addItem} menuItem={item} cartPageState={cartPageState}/>
                ))
            }
        </Grid>
    );
};

export default Menu;