import React from "react"
import {Shop} from './Shop'
import {IShopsState} from "../../../models/state.models/shopsState.interface";
import {IShop} from "../../../models/shop.interface";

interface MyShopsProps {
    shopsPageState: IShopsState,
    onClickShop: (shop: IShop) => void,

}

export const Shops = ({shopsPageState, onClickShop}: MyShopsProps) => {

    const {shops} = shopsPageState

    return <>

        {shops.map((shop, index) => {
            return <Shop
                shop={shop}
                onClickShop={onClickShop}
                key={index}
            />
        })}
    </>
}
