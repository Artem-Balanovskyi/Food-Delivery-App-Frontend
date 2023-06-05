import {IDispatchAction} from "../../models/dispatchAction.interface";
import {IShop} from "../../models/shop.interface";
import {IShopsState} from "../../models/state.models/shopsState.interface";
import {IMenuItem} from "../../models/menuItem.interface";

const SET_SHOPS = 'SHOP:SET_SHOPS'
const SET_ACTIVE_SHOP = 'SHOP:SET_ACTIVE_SHOP'
const SET_ACTIVE_MENU = 'SHOP:SET_ACTIVE_MENU'
const SET_IS_ACTIVE_TRUE = 'SHOP:SET_IS_ACTIVE_TRUE'
const SET_IS_ACTIVE_FALSE = 'SHOP:SET_IS_ACTIVE_FALSE'
const UPDATE_SEARCH_VALUE = 'SHOP:UPDATE_SEARCH'

const initialState: IShopsState = {
    activeShop: {
    _id: "1",
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
        },
        {
            _id: `Mc Donald's-4`,
            itemName: 'French Fries',
            price: 45,
            image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
            quantity: 1
        },
        {
            _id: `Mc Donald's-5`,
            itemName: 'Mc Flurry',
            price: 77,
            image: 'https://hips.hearstapps.com/hmg-prod/images/mcflurry-snickers-2033383452589073a7547ff-7-1566838680.jpg',
            quantity: 1
        },
        {
            _id: `Mc Donald's-6`,
            itemName: 'Milk Shake',
            price: 66,
            image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
            quantity: 1
        }
    ]
    },
    activeMenu: [
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
        },
        {
            _id: `Mc Donald's-4`,
            itemName: 'French Fries',
            price: 45,
            image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
            quantity: 1
        },
        {
            _id: `Mc Donald's-5`,
            itemName: 'Mc Flurry',
            price: 77,
            image: 'https://hips.hearstapps.com/hmg-prod/images/mcflurry-snickers-2033383452589073a7547ff-7-1566838680.jpg',
            quantity: 1
        },
        {
            _id: `Mc Donald's-6`,
            itemName: 'Milk Shake',
            price: 66,
            image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
            quantity: 1
        }
    ],
    searchValue: '',
    shops:         [
        {
            _id: "1",
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
                },
                {
                    _id: `Mc Donald's-4`,
                    itemName: 'French Fries',
                    price: 45,
                    image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
                    quantity: 1
                },
                {
                    _id: `Mc Donald's-5`,
                    itemName: 'Mc Flurry',
                    price: 77,
                    image: 'https://hips.hearstapps.com/hmg-prod/images/mcflurry-snickers-2033383452589073a7547ff-7-1566838680.jpg',
                    quantity: 1
                },
                {
                    _id: `Mc Donald's-6`,
                    itemName: 'Milk Shake',
                    price: 66,
                    image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
                    quantity: 1
                }
            ]
        },
        {
            _id: "2",
            shopName: 'KFC',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/800px-KFC_logo.svg.png',
            isActive: false,
            menu: [
                {
                    _id: `KFC-1`,
                    itemName: 'Hot Wings',
                    price: 112,
                    image: 'https://www.lokaeats.com/wp-content/uploads/2021/03/hot.jpg',
                    quantity: 1
                },
                {
                    _id: `KFC-2`,
                    itemName: 'Doublicious Sandwich',
                    price: 103,
                    image: 'https://www.lokaeats.com/wp-content/uploads/2021/03/sig.png',
                    quantity: 1
                },
                {
                    _id: `KFC-3`,
                    itemName: 'Family Bucket',
                    price: 56,
                    image: 'https://www.lokaeats.com/wp-content/uploads/2021/03/fam1.jpg',
                    quantity: 1
                },
                {
                    _id: `KFC-4`,
                    itemName: 'Mashed Potato',
                    price: 45,
                    image: 'https://www.mashed.com/img/gallery/the-truth-about-kfcs-famous-mashed-potatoes/intro-1640031228.jpg',
                    quantity: 1
                },
                {
                    _id: `KFC-5`,
                    itemName: 'Mc Flurry',
                    price: 77,
                    image: 'https://hips.hearstapps.com/hmg-prod/images/mcflurry-snickers-2033383452589073a7547ff-7-1566838680.jpg',
                    quantity: 1
                },
                {
                    _id: `KFC-6`,
                    itemName: 'Milk Shake',
                    price: 66,
                    image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
                    quantity: 1
                }
            ]
        },
        {
            _id: "3",
            shopName: 'Subway',
            logo: 'https://e0.pxfuel.com/wallpapers/458/695/desktop-wallpaper-subway-subway-logo.jpg',
            isActive: false,
            menu: [
                {
                    _id: 'Subway-1',
                    itemName: 'Cheesy BBQ Bacon',
                    price: 100,
                    image: 'https://mysubway.ro/wp-content/uploads/2022/05/Cheesy-BBQ-Bacon.jpg',
                    quantity: 1
                },
                {
                    _id: 'Subway-2',
                    itemName: 'Tomato Toastie',
                    price: 120,
                    image: 'https://mysubway.ro/wp-content/uploads/2022/02/Toastie-tomato_Product.jpg',
                    quantity: 1
                },
                {
                    _id: 'Subway-3',
                    itemName: 'Pepperoni Toastie',
                    price: 111,
                    image: 'https://mysubway.ro/wp-content/uploads/2022/02/Toastie-pepperoni_Product.jpg',
                    quantity: 1
                },
                {
                    _id: 'Subway-4',
                    itemName: 'Quesadilla de pui',
                    price: 150,
                    image: 'https://mysubway.ro/wp-content/uploads/2021/02/Chicken-quesadilla-1.jpg',
                    quantity: 1
                },
                {
                    _id: 'Subway-5',
                    itemName: 'T.L.C.® Teriyaki',
                    price: 180,
                    image: 'https://mysubway.ro/wp-content/uploads/2022/02/TLC_teriyaki.jpg',
                    quantity: 1
                },
                {
                    _id: 'Subway-6',
                    itemName: 'Guacamole picant',
                    price: 156,
                    image: 'https://mysubway.ro/wp-content/uploads/2020/11/Salad-Spicy-Guacamole_Web.jpg',
                    quantity: 1
                }
            ]
        },
    ]
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
export const setActiveMenuAC = (menuItems: IMenuItem[]) => ({type: SET_ACTIVE_MENU, menuItems})
export const setIsActiveTrueAC = (shopId: string) => ({type: SET_IS_ACTIVE_TRUE, shopId})
export const setIsActiveFalseAC = () => ({type: SET_IS_ACTIVE_FALSE})
export const updateSearchAC = (searchValue: string) => ({type: UPDATE_SEARCH_VALUE, searchValue})
