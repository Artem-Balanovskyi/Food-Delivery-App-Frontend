import React, {useEffect} from "react"
import {Shop} from './Shop'
import {IShop} from "../../../models/shop.interface";
import {IShopsState} from "../../../models/state.models/shopsState.interface";
import {ICartState} from "../../../models/state.models/cartState.interface";

interface MyShopsProps {
    shopsPageState: IShopsState,
    cartPageState: ICartState,
    onClickShop: (shop: IShop) => void,
    fetchShops: Function
}

export const Shops = ({shopsPageState, cartPageState, onClickShop, fetchShops}: MyShopsProps) => {

    const {shops, activeShop} = shopsPageState
    const {cartItems} = cartPageState

    useEffect(() => {
        fetchShops('http://localhost:3001/shops');
    }, [fetchShops]);


    return <>
        {activeShop && cartItems.length > 0 && <Shop shop={activeShop} onClickShop={onClickShop} key={activeShop.shopName}/>}

        {cartItems.length === 0 && shops.map((shop, index) => {
            return <Shop
                shop={shop}
                onClickShop={onClickShop}
                key={index}
            />
        })}
    </>
}
