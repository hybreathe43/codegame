import React from "react";
import HeaderImg from "./HeaderImg";
import DrawerAppBar from "../../Layouts/HomePageLayout";
import ServicesSlider from "./PopulerServices";
import MobileGames from "./MobileGames";
import SEOBlock from "./SEOBlock";
import {  Grid } from "@mui/material";
import NewsPromotion from "./NewsPromotion";
import Reviews from "./Reviews";
import ServicesCatalog from "./ServicesCatalog";
import GamesCatelog from "./GameCatalog";

const index = () => {
    return (
        <>
            <DrawerAppBar>
                <HeaderImg />
                <ServicesSlider />
                <ServicesCatalog />
                <MobileGames />
                <GamesCatelog/>
                <NewsPromotion />
                <Grid sx={{ background: "rgba(131, 151, 195, 0.1)" }}>
                    <Reviews />
                </Grid>
                <SEOBlock />
            </DrawerAppBar>
        </>
    );
};

export default index;
