import React from "react"
import {Paper, Stack, Typography} from '@mui/material'
import {IShop} from "../../../models/shop.interface";

type Props = {
    shop: IShop
    onClickShop: (shop: IShop) => void
}

export const Shop = ({shop, onClickShop}: Props) => {
    const active = (!shop.isActive) ? 0.5 : 1

    return <Paper
        onClick={() => onClickShop(shop)}
        elevation={6}
        sx={{cursor: 'pointer', opacity: active}}>
        <Stack direction='row'
               spacing={2}
               justifyContent='center'
               padding={2}>
            <img src={shop.logo} alt={shop.shopName} width='40px'/>
            <Typography variant="h6">
                {shop.shopName}
            </Typography>
        </Stack>
    </Paper>
}