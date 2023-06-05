import {TextField} from "@mui/material";
import {ChangeEvent} from "react";
import {IShopsState} from "../../../models/state.models/shopsState.interface";
import {IShop} from "../../../models/shop.interface";

interface MySearchProps {
    shopsPageState: IShopsState,
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>, activeShop: IShop) => void
}

const Search = ({shopsPageState, onChangeSearch}: MySearchProps) => {

    const {searchValue, activeShop} = shopsPageState

    return <>
        {activeShop && <TextField
        label='search'
        variant="standard"
        fullWidth
        type='search'
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeSearch(e, activeShop)}
        sx={{
            mb: "1.5rem"
        }}
    />}
    </>
};

export default Search;