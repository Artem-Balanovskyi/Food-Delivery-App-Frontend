import {IState} from "../../../models/state.models/state.interface";
import {
    addCartItemAC,
    calculateQuantityAndPriceAC,
    changeSnackMessageAC,
    increaseQuantityAC
} from "../../../store/reducers/cartReducer";
import {connect} from "react-redux";
import Menu from "./Menu";
import {IMenuItem} from "../../../models/menuItem.interface";
import {openSnackAC} from "../../../store/reducers/cartReducer";

let mapStateToProps = (state: IState) => {

    return {
        shopsPageState: state.shopsPageState,
        cartPageState: state.cartPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        addItem: (menuItem: IMenuItem, indexInCart: number) => {
            if (indexInCart > -1) {
                dispatch(increaseQuantityAC(menuItem._id))
                dispatch(calculateQuantityAndPriceAC())
                dispatch(changeSnackMessageAC('Item is added to the cart!'))
                dispatch(openSnackAC())

            } else {
                dispatch(addCartItemAC([menuItem]))
                dispatch(calculateQuantityAndPriceAC())
                dispatch(changeSnackMessageAC('Item is added to the cart!'))
                dispatch(openSnackAC())
            }
        },
    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer;