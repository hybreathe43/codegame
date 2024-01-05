import {
    Button,
    CardMedia,
    Container,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IMG1 from "/public/image/IMG1.png";
import IMG2 from "/public/image/IMG2.png";
import IMG3 from "/public/image/IMG3.png";
import IMG4 from "/public/image/IMG4.png";
import IMG5 from "/public/image/IMG5.png";
import IMG6 from "/public/image/IMG6.png";
import IMG7 from "/public/image/IMG7.png";
import IMG8 from "/public/image/IMG8.png";
import IMG9 from "/public/image/IMG9.png";
import IMG10 from "/public/image/IMG10.png";
import IMG11 from "/public/image/IMG11.png";
import IMG12 from "/public/image/IMG12.png";
import IMG13 from "/public/image/IMG13.png";
import IMG14 from "/public/image/IMG14.png";
import IMG15 from "/public/image/IMG15.png";
import IMG16 from "/public/image/IMG16.png";
import IMG17 from "/public/image/IMG17.png";
import IMG18 from "/public/image/IMG18.png";
import IMG19 from "/public/image/IMG19.png";
import IMG20 from "/public/image/IMG20.png";
import { changeSkel } from "../action/index";
import { useSelector, useDispatch } from "react-redux";

const MobileGames = () => {
    const state = useSelector((state) => state.changeSkelton);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(changeSkel());
        }, 2000);
    }, []);

    const MobileGame = [
        { img: IMG1, title: "BeeTV" },
        { img: IMG2, title: "Netflix" },
        { img: IMG3, title: "Megogo Максимальн.." },
        { img: IMG4, title: "Okko Лайт " },
        { img: IMG5, title: "Netflix" },
        { img: IMG6, title: "Brawl Stars" },
        { img: IMG7, title: "Nindendo eShop" },
        { img: IMG8, title: "Tinder" },
        { img: IMG9, title: "Pubg mobile" },
        { img: IMG10, title: "New State" },
    ];
    const Subscription = [
        { img: IMG11, title: "BeeTV" },
        { img: IMG12, title: "Netflix" },
        { img: IMG13, title: "Megogo Максимальн.." },
        { img: IMG14, title: "Okko Лайт " },
        { img: IMG15, title: "Okko Лайт " },
        { img: IMG16, title: "EA Gift card" },
        { img: IMG17, title: "Nindendo eShop" },
        { img: IMG18, title: "Tinder" },
        { img: IMG19, title: "Spotify" },
        { img: IMG20, title: "Apple Card" },
    ];
    const ShowSkelton = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ];

    return (
        <Container maxWidth="xl" sx={{ mt: 3, px: "100px !important" }}>
            <Grid container sx={{ pr: 1.5, py: 4 }}>
                <Grid item xs={6}>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {state ? (
                            <>
                                <Typography
                                    sx={{
                                        color: "#FFFF",
                                        fontSize: "32px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Mobile games
                                </Typography>
                                <Grid sx={{ pt: 1 }}>
                                    <Button
                                        sx={{
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            borderRadius: 5,
                                            color: "#FFF",
                                            p: "7px 12px",
                                        }}
                                    >
                                        Bec <ChevronRightIcon />
                                    </Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    width="40%"
                                    height={60}
                                    sx={{
                                        backgroundColor: "#1B2037",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Skeleton
                                    width="15%"
                                    height={60}
                                    sx={{
                                        backgroundColor: "#1B2037",
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                        )}
                    </Grid>

                    <Grid sx={{ pt: 3 }}>
                        <Grid
                            container
                            sx={{
                                background: "rgba(131, 151, 195, 0.1)",
                                px: 3,
                                py: 2,
                                borderRadius: 3,
                                boxShadow: 2,
                            }}
                        >
                            {state ? (
                                <>
                                    {MobileGame.map((data, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            xs={2.4}
                                            sx={{ pt: 1.5 }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    height: "98px",
                                                    width: "98px",
                                                    objectFit: "fill",
                                                    borderRadius: 3,
                                                }}
                                                image={data.img}
                                                alt="Paella dish"
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: "#FFFF",
                                                    pt: 1,
                                                }}
                                            >
                                                {data.title}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {ShowSkelton.map(() => (
                                        <Grid item xs={2} sx={{mr:2}}>
                                            <Skeleton
                                                height={98}
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                            <Skeleton
                                                width="90%"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                            <Skeleton
                                                width="60%"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sx={{ pl: 3 }}>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {state ? (
                            <>
                                <Typography
                                    sx={{
                                        color: "#FFFF",
                                        fontSize: "32px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Subscriptions and payment cards
                                </Typography>
                                <Grid sx={{ pt: 1 }}>
                                    <Button
                                        sx={{
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            borderRadius: 5,
                                            color: "#FFF",
                                            p: "7px 12px",
                                        }}
                                    >
                                        Bec <ChevronRightIcon />
                                    </Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    width="60%"
                                    height={60}
                                    sx={{
                                        backgroundColor: "#1B2037",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Skeleton
                                    width="15%"
                                    height={60}
                                    sx={{
                                        backgroundColor: "#1B2037",
                                        borderRadius: 6,
                                    }}
                                />
                            </>
                        )}
                    </Grid>
                    <Grid sx={{ pt: 3 }}>
                        <Grid
                            container
                            sx={{
                                background: "rgba(131, 151, 195, 0.1)",
                                px: 3,
                                py: 2,
                                borderRadius: 3,
                                boxShadow: 2,
                            }}
                        >

                            {state ?
                            <>
                             {Subscription.map((data, index) => (
                                <Grid
                                    key={index}
                                    item
                                    xs={2.4}
                                    sx={{ pt: 1.5 }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: "98px",
                                            width: "98px",
                                            objectFit: "fill",
                                            borderRadius: 3,
                                        }}
                                        image={data.img}
                                        alt="Paella dish"
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "#FFFF",
                                            pt: 1,
                                        }}
                                    >
                                        {data.title}
                                    </Typography>
                                </Grid>
                            ))}
                            </>
                            :
                            <>
                             {ShowSkelton.map(() => (
                                        <Grid item xs={2} sx={{mr:2}}>
                                            <Skeleton
                                                height={98}
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                            <Skeleton
                                                width="90%"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                            <Skeleton
                                                width="60%"
                                                style={{
                                                    backgroundColor:
                                                        "rgba(131, 151, 195, 0.1)",
                                                }}
                                            />
                                        </Grid>
                                    ))}
                            </>}

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MobileGames;
