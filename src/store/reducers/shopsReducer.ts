import {IDispatchAction} from "../../models/dispatchAction.interface";
import {IShop} from "../../models/shop.interface";
import {IShopsState} from "../../models/state.models/shopsState.interface";

const SET_SHOPS = 'SHOP:SET_SHOPS'
const SET_IS_ACTIVE_TRUE = 'SHOP:SET_IS_ACTIVE_TRUE'
const SET_IS_ACTIVE_FALSE = 'SHOP:SET_IS_ACTIVE_FALSE'

const initialState: IShopsState = {
    searchValue: '',
    shops: [
        {
            _id: '1',
            shopName: 'Mc Donald\'s',
            logo: 'https://media.designrush.com/inspiration_images/134933/conversions/_1511456189_555_McDonald\'s-mobile.jpg',
            isActive: true,
            menu: [
                {
                    _id: `Mc Donald's-1`,
                    itemName: 'Big Tasty',
                    price: 112,
                    image: 'https://www.mcdonalds.com.mt/wp-content/uploads/2018/05/BigTasty-Classic.jpg',
                    quantity: 1
                },
                {
                    _id: `Mc Donald's-2`,
                    itemName: 'Big Mac',
                    price: 103,
                    image: 'https://www.jacksonville.com/gcdn/authoring/2018/07/30/NFTU/ghows-LK-723ced46-d607-5a6b-e053-0100007fdf20-23291ab6.jpeg?width=660&height=422&fit=crop&format=pjpg&auto=webp',
                    quantity: 1
                },
                {
                    _id: `Mc Donald's-3`,
                    itemName: 'Cheeseburger',
                    price: 56,
                    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Cheeseburger-new:1-3-product-tile-desktop?wid=829&hei=515&dpr=off',
                    quantity: 1
                }

            ]
        }
    ]
}

export const shopsReducer = (state: IShopsState = initialState, action: IDispatchAction) => {
    switch (action.type) {
        case SET_SHOPS:
            if (action.shops?.length && action.shops?.length > 0)
                return {
                    ...state,
                    shops: [...action.shops]
                }
            break
        case SET_IS_ACTIVE_TRUE:
            return {
                ...state,
                shops: state.shops.map(shop => {
                    if (shop._id === action.shopId) {
                        return {...shop, isActive: true}
                    }
                    return shop
                })
            }
        case SET_IS_ACTIVE_FALSE:
            return {
                ...state,
                shops: state.shops.map(shop => {
                    if (shop.isActive) {
                        return {...shop, isActive: false}
                    }
                    return shop
                })
            }
        default:
            return state
    }
}

export const setShopsAC = (shops: IShop[]) => ({type: SET_SHOPS, shops})
export const setIsActiveTrueAC = (shopId: string) => ({type: SET_IS_ACTIVE_TRUE, shopId})
export const setIsActiveFalseAC = () => ({type: SET_IS_ACTIVE_FALSE})
