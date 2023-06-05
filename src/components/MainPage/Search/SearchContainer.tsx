import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import Search from "./Search";
import React from "react";
import {setActiveMenuAC, updateSearchAC} from "../../../store/reducers/shopsReducer";
import {IShop} from "../../../models/shop.interface";

let mapStateToProps = (state: IState) => {

    return {
        shopsPageState: state.shopsPageState,
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>, activeShop: IShop) => {
            if (!e.target.value) {
                dispatch(setActiveMenuAC(activeShop.menu))
                dispatch(updateSearchAC(''))
                return;
            }

            dispatch(updateSearchAC(e.target.value))
            dispatch(setActiveMenuAC((
                activeShop.menu.filter((menuItem) =>
                    menuItem.itemName.toLowerCase().includes(e.target.value.toLowerCase())
                ))))
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer;