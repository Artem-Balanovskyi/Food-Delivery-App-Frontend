import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import MainPageHeader from "./MainPageHeader";
import {openCartAC} from "../../../store/reducers/cartReducer";

let mapStateToProps = (state: IState) => {

    return {
        cartPageState: state.cartPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        openCart: () => {
            dispatch(openCartAC())
        }
    }
}

const MainPageHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MainPageHeader)

export default MainPageHeaderContainer;