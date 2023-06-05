import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import Cart from "./Cart";
import {
    calculateQuantityAndPriceAC, closeCartAC,
    decreaseQuantityAC,
    increaseQuantityAC, removeCartItemAC, resetCartAC
} from "../../../store/reducers/cartReducer";

let mapStateToProps = (state: IState) => {

    return {
        cartPageState: state.cartPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        removeItem: (itemId: string) => {
            dispatch(removeCartItemAC(itemId))
            dispatch(calculateQuantityAndPriceAC())
        },
        increaseQuantity: (itemId: string) => {
            dispatch(increaseQuantityAC(itemId))
            dispatch(calculateQuantityAndPriceAC())
        },
        decreaseQuantity: (itemId: string) => {
            dispatch(decreaseQuantityAC(itemId))
            dispatch(calculateQuantityAndPriceAC())
        },
        closeCart: () => {
            dispatch(closeCartAC())
        },
        onClickClose: () => {
            dispatch(closeCartAC())
        },
        resetCart: () => {
            dispatch(resetCartAC())
            dispatch(calculateQuantityAndPriceAC())
        }
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer;