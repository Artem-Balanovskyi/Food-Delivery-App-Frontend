import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import Menu from "./Menu";

let mapStateToProps = (state: IState) => {

    return {
        shopsPageState: state.shopsPageState,
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {

    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer;