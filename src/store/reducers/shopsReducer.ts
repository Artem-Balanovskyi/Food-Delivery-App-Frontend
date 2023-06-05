import {IDispatchAction} from "../../models/dispatchAction.interface";
import {IShop} from "../../models/shop.interface";
import {IShopsState} from "../../models/state.models/shopsState.interface";
import {IMenuItem} from "../../models/menuItem.interface";

const SET_SHOPS = 'SHOP:SET_SHOPS'
const SET_ACTIVE_SHOP = 'SHOP:SET_ACTIVE_SHOP'
const SET_IS_ACTIVE_TRUE = 'SHOP:SET_IS_ACTIVE_TRUE'
const SET_IS_ACTIVE_FALSE = 'SHOP:SET_IS_ACTIVE_FALSE'
const UPDATE_SEARCH_VALUE = 'SHOP:UPDATE_SEARCH'
const SET_ACTIVE_MENU = 'SHOP:SET_ACTIVE_MENU'

const initialState: IShopsState = {
    activeMenu: [],
    searchValue: '',
    shops: []

}

export const shopsReducer = (state: IShopsState = initialState, action: IDispatchAction) => {
    switch (action.type) {
        case SET_SHOPS:
            if (action.shops)
                return {
                    ...state,
                    shops: [...action.shops]
                }
            break
        case SET_ACTIVE_SHOP:
            return {
                ...state,
                activeShop: state.shops.reduce((activeShop, shop) => {
                    if (shop._id === action.shopId) {
                        activeShop = {...shop}
                    }
                    return {...activeShop, isActive: true}
                })
            }
        case SET_ACTIVE_MENU:
            if (action.menuItems)
                return {
                    ...state,
                    activeMenu: [...action.menuItems]
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
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
            }
        default:
            return state
    }
}

export const setShopsAC = (shops: IShop[]) => ({type: SET_SHOPS, shops})
export const setActiveShopAC = (shopId: string) => ({type: SET_ACTIVE_SHOP, shopId})
export const setIsActiveTrueAC = (shopId: string) => ({type: SET_IS_ACTIVE_TRUE, shopId})
export const setIsActiveFalseAC = () => ({type: SET_IS_ACTIVE_FALSE})
export const updateSearchAC = (searchValue: string) => ({type: UPDATE_SEARCH_VALUE, searchValue})
export const setActiveMenuAC = (menuItems: IMenuItem[]) => ({type: SET_ACTIVE_MENU, menuItems})
