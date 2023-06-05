import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import {Shops} from "./Shops";
import {IShop} from "../../../models/shop.interface";
import {
    setActiveMenuAC,
    setIsActiveTrueAC,
    setIsActiveFalseAC,
    setActiveShopAC
} from "../../../store/reducers/shopsReducer";

let mapStateToProps = (state: IState) => {

    return {
        shopsPageState: state.shopsPageState,
        cartPageState: state.cartPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        onClickShop: (shop: IShop) => {

            dispatch(setIsActiveFalseAC())
            dispatch(setIsActiveTrueAC(shop._id))
            dispatch(setActiveShopAC(shop._id))
            dispatch(setActiveMenuAC(shop.menu))

        }
    }
}

const ShopsContainer = connect(mapStateToProps, mapDispatchToProps)(Shops)

export default ShopsContainer;