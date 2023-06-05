import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import {
    calculateQuantityAndPriceAC,
    decreaseQuantityAC,
    increaseQuantityAC,
    removeCartItemAC
} from "../../../store/reducers/cartReducer";
import OrderDetails from "./OrderDetails";

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
        }
    }
}

const OrderDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(OrderDetails)

export default OrderDetailsContainer;