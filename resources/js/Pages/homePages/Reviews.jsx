import { useEffect, useState } from "react";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StarRateIcon from "@mui/icons-material/StarRate";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Container, Typography, Rating, Grid, Card } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { changeSkel } from "../action/index";

import Skelton from "./Skelton";

export default function Reviews() {
    const [sliderRef, setSliderRef] = useState(null);
    const [review, setReview] = useState([]);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,

        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
            const review = [
                {
                    title: "Клумсин Пурин",
                    verified: "Подтвержденный пользователь",
                    desc: "Потрясающе!! Потрясающе!! потрясающий сервис и отличное общение",
                    date: "22 сентября 2023",
                },
                {
                    title: "Смешная девушка",
                    verified: "Подтвержденный пользователь",
                    desc: "Потрясающе!! Потрясающе!! потрясающий сервис и отличное общение",
                    date: "22 сентября 2023",
                },
                {
                    title: "Адамс",
                    verified: "Подтвержденный пользователь",
                    desc: "Потрясающе!! Потрясающе!! потрясающий сервис и отличное общение",
                    date: "22 сентября 2023",
                },
                {
                    title: "Лысый заяц",
                    verified: "Подтвержденный пользователь",
                    desc: "Потрясающе!! Потрясающе!! потрясающий сервис и отличное общение",
                    date: "22 сентября 2023",
                },
            ];
            setReview(review);
        }, 2000);
    }, []);

    const [value, setValue] = useState(5);
    const state = useSelector((state) => state.changeSkelton);
    const dispatch = useDispatch();

    return (
        <Container maxWidth="xl" sx={{ mt: 3, px: "100px !important" }}>
            <Grid sx={{ py: 4 }}>
                <Grid className="content">
                    <Grid container sx={{ pb: 0.1 }}>
                        <Grid item xs={6}>
                            {state ? (
                                <Typography
                                    sx={{
                                        fontSize: "32px",
                                        fontWeight: 600,
                                        color: "#FFFF",
                                    }}
                                >
                                    Reviews
                                </Typography>
                            ) : (
                                <Skelton
                                    width={167}
                                    height={40}
                                    style={{
                                        backgroundColor:
                                            "rgba(131, 151, 195, 0.1)",
                                    }}
                                />
                            )}
                        </Grid>
                        {review.length > 4 && (
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "end" }}
                            >
                                {review ? (
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
                        )}
                    </Grid>
                    <Grid container sx={{ py: 2 }}>
                        <Grid item xs={6}>
                            {state ? (
                                <Typography
                                    sx={{
                                        fontSize: 18,
                                        color: "#FFFFFF",
                                        fontWeight: 500,
                                    }}
                                >
                                    Рейтинг более 5 из 5 на{" "}
                                    <StarRateIcon sx={{ p: 0.4 }} />{" "}
                                    trustpilot.com
                                </Typography>
                            ) : (
                                <Skelton
                                    width={259}
                                    height={24}
                                    style={{
                                        backgroundColor:
                                            "rgba(131, 151, 195, 0.1)",
                                    }}
                                />
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            {state ? (
                                <>
                                    <Rating
                                        sx={{ color: "#3CCA5B" }}
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: "#E5E6E8",
                                        }}
                                    >
                                        &nbsp;
                                        {value} (102)
                                    </Typography>
                                </>
                            ) : (
                                <Skelton
                                    width={259}
                                    height={24}
                                    style={{
                                        backgroundColor:
                                            "rgba(131, 151, 195, 0.1)",
                                    }}
                                />
                            )}
                        </Grid>
                    </Grid>

                    <Slider ref={setSliderRef} {...sliderSettings}>
                        {review &&
                            review.map((data, index) => (
                                <Grid sx={{ pr: 2.4 }} key={index}>
                                    <Card
                                        sx={{
                                            py: 2.5,
                                            px: 3,
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <Grid
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 18,
                                                    color: "#FFFFFF",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {data.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#3CCA5B",
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {" "}
                                                <StarRateIcon
                                                    sx={{ fontSize: 31, pb: 1 }}
                                                />{" "}
                                                5
                                            </Typography>
                                        </Grid>
                                        <Typography
                                            sx={{
                                                color: "#50B5FF",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                pt: 1,
                                            }}
                                        >
                                            {" "}
                                            <VerifiedIcon /> {data.verified}
                                        </Typography>
                                        <Typography
                                            sx={{ color: "#FFFFFF", pt: 1.5 }}
                                        >
                                            {data.desc}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                pt: 14,
                                                color: "rgba(255, 255, 255, 0.6)",
                                                fontSize: 16,
                                                fontWeight: 400,
                                                pb: 1,
                                            }}
                                        >
                                            {data.date}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}

                        {!review &&
                            [1, 2, 3, 4].map((data, index) => (
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
                    </Slider>
                </Grid>
            </Grid>
        </Container>
    );
}
