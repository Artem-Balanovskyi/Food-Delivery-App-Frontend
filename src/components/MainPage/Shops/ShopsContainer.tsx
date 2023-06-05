import {IState} from "../../../models/state.models/state.interface";
import {connect} from "react-redux";
import {Shops} from "./Shops";
import {IShop} from "../../../models/shop.interface";
import {
    setActiveMenuAC,
    setIsActiveTrueAC,
    setIsActiveFalseAC,
    setActiveShopAC, setShopsAC
} from "../../../store/reducers/shopsReducer";
import axios from "axios";

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

        },
        fetchShops: async (url: string) => {

            let shops: IShop[] = await axios.get(url)
                .then((response) => {
                    return response.data.shops
                }).catch(() => {
                })

            if (shops.length && shops.length > 0) {
                dispatch(setShopsAC(shops))
                dispatch(setIsActiveTrueAC(shops[0]._id))
                dispatch(setActiveShopAC(shops[0]._id))
                dispatch(setActiveMenuAC(shops[0].menu))
            }
        }
    }
}

const ShopsContainer = connect(mapStateToProps, mapDispatchToProps)(Shops)

export default ShopsContainer;