import React from "react";
import {Container, Grid, Stack, Typography} from "@mui/material";
import MainPageHeader from "../components/MainPage/MainPageHeader/MainPageHeader";
import ShopsContainer from "../components/MainPage/Shops/ShopsContainer";
import MenuContainer from "../components/MainPage/Menu/MenuContainer";
import Search from "../components/MainPage/Search/Search";

export function MainPage() {
    return (
        <>
            <MainPageHeader/>
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
                        <Search/>
                        <MenuContainer/>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}