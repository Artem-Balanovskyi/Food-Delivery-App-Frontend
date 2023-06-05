import React from "react";
import MainPageHeaderContainer from "../components/MainPage/MainPageHeader/MainPageHeaderContainer";
import {Container, Grid, Stack, Typography} from "@mui/material";
import ShopsContainer from "../components/MainPage/Shops/ShopsContainer";
import SearchContainer from "../components/MainPage/Search/SearchContainer";
import MenuContainer from "../components/MainPage/Menu/MenuContainer";
import CartContainer from "../components/MainPage/Cart/CartContainer";
import SnackContainer from "../components/MainPage/Snack/SnackContainer";

export function MainPage() {
    return (
        <>
            <MainPageHeaderContainer/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Container sx={{mt: '1rem'}}>
                        <Typography variant="h5" textAlign='center' marginBottom={2}>
                            Shops:
                        </Typography>
                        <Stack spacing={2}>
                            <ShopsContainer/>
                        </Stack>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Container sx={{mt: '1rem'}}>
                        <SearchContainer/>
                        <MenuContainer/>
                    </Container>
                </Grid>
            </Grid>
            <CartContainer/>
            <SnackContainer/>
        </>
    )
}