import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
    Container,
    Typography,
    CardMedia,
    Grid,
    Card,
    Chip,
    Skeleton,
} from "@mui/material";
import img1 from "../../../../public/image/FreeFire.png";
import img2 from "../../../../public/image/Genshin.png";
import img3 from "../../../../public/image/Pubg.png";
import img4 from "../../../../public/image/Roblox.png";
import img5 from "../../../../public/image/steam.png";

// const pricingCards = [
//     {
//         imageSrc: img1,
//         name: "Steam",
//     },
//     {
//         imageSrc: img2,
//         name: "PUBG: Mobile",
//     },
//     {
//         imageSrc: img3,
//         name: "Roblox",
//     },
//     {
//         imageSrc: img4,
//         name: "Free Fire",
//     },
//     {
//         imageSrc: img5,
//         name: "Genshin",
//     },
//     {
//         imageSrc: img1,
//         name: "Farlight 84",
//     },
//     {
//         imageSrc: img2,
//         name: "Genshin",
//     },
//     {
//         imageSrc: img4,
//         name: "Farlight 84",
//     },
// ]

const CrousalSlider = ({ slideToshow, firstbt, secondbp, title, children }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 2000);
    }, []);

    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        arrows: false,
        slidesToShow: slideToshow,
        slidesToScroll: 1,

        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: firstbt,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: secondbp,
                },
            },
        ],
    };
    return (
        <Grid className="content">
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                {show ? (
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: 600,
                            color: "#FFFF",
                        }}
                    >
                        {title}
                    </Typography>
                ) : (
                    <Skeleton
                        width="30%"
                        height={70}
                        style={{ backgroundColor: "#1B2037" }}
                    />
                )}

                <Grid>
                    {show ? (
                        <>
                            <button
                                onClick={sliderRef?.slickPrev}
                                type="button"
                                style={{
                                    background: "rgba(131, 151, 195, 0.1)",
                                    border: "none",
                                    padding: "10px 12px 10px 19px",
                                    marginRight: "15px",
                                    borderRadius: 114,
                                }}
                            >
                                <ArrowBackIosIcon
                                    sx={{
                                        fontSize: "18px",
                                        color: "#FFFF",
                                    }}
                                />
                            </button>
                            <button
                                onClick={sliderRef?.slickNext}
                                type="button"
                                style={{
                                    background: "rgba(131, 151, 195, 0.1)",
                                    border: "none",
                                    padding: "10px 12px 10px 16px",
                                    marginRight: "15px",
                                    borderRadius: 114,
                                }}
                            >
                                <ArrowForwardIosRoundedIcon
                                    sx={{
                                        fontSize: "18px",
                                        color: "#FFFF",
                                    }}
                                />
                            </button>
                        </>
                    ) : (
                        " "
                    )}
                </Grid>
            </Grid>
            <Grid>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {children}
                </Slider>
            </Grid>
        </Grid>
    );
};

CrousalSlider.PropTypes = {
    children: PropTypes.node,
};

export default CrousalSlider;
