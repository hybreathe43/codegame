import { useEffect, useState } from "react";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
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
} from "@mui/material";
import img1 from "../../../../public/image/FreeFire.png";
import img2 from "../../../../public/image/Genshin.png";
import img3 from "../../../../public/image/Pubg.png";
import img4 from "../../../../public/image/Roblox.png";
import img5 from "../../../../public/image/steam.png";
import CrousalSlider from "./Slider";

export default function ServicesSlider() {
    const [sliderRef, setSliderRef] = useState(null);
    const [pricingCards, setPricingCard] = useState();

    const sliderSettings = {
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        setTimeout(() => {
            const pricingCards = [
                {
                    imageSrc: img1,
                    name: "Steam",
                },
                {
                    imageSrc: img2,
                    name: "PUBG: Mobile",
                },
                {
                    imageSrc: img3,
                    name: "Roblox",
                },
                {
                    imageSrc: img4,
                    name: "Free Fire",
                },
                {
                    imageSrc: img5,
                    name: "Genshin",
                },
                {
                    imageSrc: img1,
                    name: "Farlight 84",
                },
                {
                    imageSrc: img2,
                    name: "Genshin",
                },
                {
                    imageSrc: img4,
                    name: "Farlight 84",
                },
            ];
            setPricingCard(pricingCards);
        }, 2000);
    }, []);

    const sketlon = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ mt: 2, px: "100px !important" }}>
            <Grid sx={{ pt: 2 }}>
                {/* <Grid className="content">
                    <Grid container sx={{}}>
                        <Grid item xs={6}>
                            {pricingCards ? (
                                <Typography
                                    sx={{
                                        fontSize: "32px",
                                        fontWeight: 600,
                                        color: "#FFFF",
                                    }}
                                >
                                    Popular services
                                </Typography>
                            ) : (
                                <Skeleton
                                    width="50%"
                                    height={70}
                                    style={{ backgroundColor: "#1B2037" }}
                                />
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            {pricingCards ? (
                                <>
                                    <button
                                        onClick={sliderRef?.slickPrev}
                                        type="button"
                                        style={{
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            border: "none",
                                            padding: "0px 12px 0px 19px",
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
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            border: "none",
                                            padding: "0px 12px 0px 16px",
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

                    <Slider ref={setSliderRef} {...sliderSettings}>
                        {pricingCards &&
                            pricingCards.map((card, index) => (
                                <Grid
                                    key={index}
                                    container
                                    sx={{
                                        display: "flex",
                                    }}
                                >
                                    <Grid sx={{ pr: 2.4 }}>
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                                height: 345,
                                                boxShadow: "none",
                                                background: "transparent",
                                                position: "absoulate",
                                            }}
                                        >
                                            <Chip
                                                label={`${index + 10}%`}
                                                sx={{
                                                    background: "#EBFF00",
                                                    color: "#14171E",
                                                    fontSize: 15,
                                                    p: "2px 0px",
                                                    fontWeight: 800,
                                                    position: "relative",
                                                    top: "40px",
                                                    left: "3px",
                                                }}
                                            />
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    height: "256px",
                                                    objectFit: "fill",
                                                }}
                                                image={card.imageSrc}
                                                alt="Paella dish"
                                            />
                                            <Grid
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    px: 0.5,
                                                    pt: 1,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "#FFFF",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    20 990 KZT
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: "#8C95AD",
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    25 990 KZT
                                                </Typography>
                                            </Grid>
                                            <Typography
                                                sx={{
                                                    pt: 0.5,
                                                    px: 0.5,
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "#8C95AD",
                                                }}
                                            >
                                                {card.name}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                </Grid>
                            ))}

                        {!pricingCards &&
                            sketlon.map((data, index) => (
                                <Grid key={index} sx={{ pr: 2 }}>
                                    <Skeleton
                                        width="100%"
                                        height={256}
                                        style={{ backgroundColor: "#1B2037" }}
                                    />
                                    <Skeleton
                                        style={{ backgroundColor: "#1B2037" }}
                                    />
                                    <Skeleton
                                        style={{ backgroundColor: "#1B2037" }}
                                    />
                                </Grid>
                            ))}
                    </Slider>

                    <Grid>

                    </Grid>
                </Grid> */}
                <CrousalSlider
                            slideToshow={6}
                            firstbt={4}
                            secondbp={2}
                            title="Popular services"
                        >
                            {pricingCards &&
                                pricingCards.map((card, index) => (
                                    <Grid
                                        key={index}
                                        container
                                        sx={{
                                            display: "flex",
                                        }}
                                    >
                                        <Grid sx={{ pr: 2.4 }}>
                                            <Card
                                                sx={{
                                                    maxWidth: 345,
                                                    height: 345,
                                                    boxShadow: "none",
                                                    background: "transparent",
                                                    position: "absoulate",
                                                }}
                                            >
                                                <Chip
                                                    label={`${index + 10}%`}
                                                    sx={{
                                                        background: "#EBFF00",
                                                        color: "#14171E",
                                                        fontSize: 15,
                                                        p: "2px 0px",
                                                        fontWeight: 800,
                                                        position: "relative",
                                                        top: "40px",
                                                        left: "3px",
                                                    }}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        height: "256px",
                                                        objectFit: "fill",
                                                    }}
                                                    image={card.imageSrc}
                                                    alt="Paella dish"
                                                />
                                                <Grid
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        px: 0.5,
                                                        pt: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: 18,
                                                            color: "#FFFF",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        20 990 KZT
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            color: "#8C95AD",
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        25 990 KZT
                                                    </Typography>
                                                </Grid>
                                                <Typography
                                                    sx={{
                                                        pt: 0.5,
                                                        px: 0.5,
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: "#8C95AD",
                                                    }}
                                                >
                                                    {card.name}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                ))}

                            {!pricingCards &&
                                sketlon.map((data, index) => (
                                    <Grid key={index} sx={{ pr: 2 }}>
                                        <Skeleton
                                            width="100%"
                                            height={256}
                                            style={{
                                                backgroundColor: "#1B2037",
                                            }}
                                        />
                                        <Skeleton
                                            style={{
                                                backgroundColor: "#1B2037",
                                            }}
                                        />
                                        <Skeleton
                                            style={{
                                                backgroundColor: "#1B2037",
                                            }}
                                        />
                                    </Grid>
                                ))}
                        </CrousalSlider>
            </Grid>
        </Container>
    );
}
