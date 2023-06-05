import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import Snack from "./Snack";
import {closeSnackAC, openSnackAC} from "../../../store/reducers/cartReducer";

let mapStateToProps = (state: IState) => {

    return {
        cartPageState: state.cartPageState,
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        openSnack: () => {
            dispatch(openSnackAC())
        },
        closeSnack: () => {
            dispatch(closeSnackAC())
        },
    }
}

const SnackContainer = connect(mapStateToProps, mapDispatchToProps)(Snack)

export default SnackContainer;