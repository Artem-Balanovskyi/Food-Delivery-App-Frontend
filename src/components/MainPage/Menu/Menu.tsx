import { Grid } from '@mui/material';
import MenuItem from './MenuItem';
import {IShopsState} from "../../../models/state.models/shopsState.interface";
import {IMenuItem} from "../../../models/menuItem.interface";


interface MyMenuProps {
    shopsPageState: IShopsState,
}
const Menu = ({ shopsPageState }: MyMenuProps) => {

    const { menu} = shopsPageState.shops[0]

    return (
        <Grid container spacing={2}>
            {
                menu.map((item: IMenuItem) => (
                    <MenuItem key={item._id} menuItem={item}/>
                ))
            }
        </Grid>
    );
};

export default Menu;