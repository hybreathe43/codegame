import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container, Typography, CardMedia, Grid, Button } from "@mui/material";
import img1 from "../../../../public/image/GameCatelog/image1.png";
import img2 from "../../../../public/image/GameCatelog/image2.png";
import img3 from "../../../../public/image/GameCatelog/image3.png";
import img4 from "../../../../public/image/GameCatelog/image4.png";
import img5 from "../../../../public/image/GameCatelog/image5.png";
import img6 from "../../../../public/image/GameCatelog/image6.png";
import img7 from "../../../../public/image/GameCatelog/image7.png";
import img8 from "../../../../public/image/GameCatelog/image8.png";
import img9 from "../../../../public/image/GameCatelog/image9.png";
import img10 from "../../../../public/image/GameCatelog/image10.png";
import img11 from "../../../../public/image/GameCatelog/image11.png";
import img12 from "../../../../public/image/GameCatelog/image12.png";
import Card from "@mui/material/Card";
import { changeSkel } from "../action/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSteam,
    faXbox,
    faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faLaptop } from "@fortawesome/free-solid-svg-icons";
import Skelton from "./Skelton";

const icon = {
    fontSize: 22,
    paddingRight: "10px",
};
const btnSx = {
    borderRadius: 6,

    px: 2,
    py: 1.3,
    mt: 1,
    fontWeight: 500,
    fontSize: 16,
};

export default function GamesCatelog() {
    const [sliderRef, setSliderRef] = useState(null);
    const [arrayShow, setArrayShow] = useState([]);
    const [select, setSelect] = useState("playstation");

    const state = useSelector((state) => state.changeSkelton);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(changeSkel());
        }, 2000);
    }, []);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 6,
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

    const Games = [
        {
            imageSrc: img1,
            name: "Resident  Evil 4",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img2,
            name: "PUBG: Mobile",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img3,
            name: "Roblox",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img4,
            name: "Free Fire",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img5,
            name: "Genshin",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img6,
            name: "Farlight 84",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img7,
            name: "Genshin",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img8,
            name: "Farlight 84",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img9,
            name: "Genshin",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img10,
            name: "Farlight 84",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img11,
            name: "Genshin",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img12,
            name: "Farlight 84",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img11,
            name: "Genshin",
            icon: faPlaystation,
            title: "P S 5",
        },
        {
            imageSrc: img12,
            name: "Farlight 84",
            icon: faPlaystation,
            title: "P S 5",
        },
    ];
    const Games1 = [
        {
            imageSrc: img1,
            name: "kabeer",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img2,
            name: "PUBG: Mobile",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img3,
            name: "Roblox",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img4,
            name: "Free Fire",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img5,
            name: "Genshin",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img6,
            name: "Farlight 84",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img7,
            name: "Genshin",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img8,
            name: "Farlight 84",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img9,
            name: "Genshin",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img10,
            name: "Farlight 84",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img11,
            name: "Genshin",
            icon: faXbox,
            title: "Xbox",
        },
        {
            imageSrc: img12,
            name: "Farlight 84",
            icon: faXbox,
            title: "Xbox",
        },
    ];
    const Games2 = [
        {
            imageSrc: img1,
            name: "kabeer",
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
            imageSrc: img6,
            name: "Farlight 84",
        },
        {
            imageSrc: img7,
            name: "Genshin",
        },
        {
            imageSrc: img8,
            name: "Farlight 84",
        },
        {
            imageSrc: img9,
            name: "Genshin",
        },
        {
            imageSrc: img10,
            name: "Farlight 84",
        },
        {
            imageSrc: img11,
            name: "Genshin",
        },
        {
            imageSrc: img12,
            name: "Farlight 84",
        },
    ];
    const Games3 = [
        {
            imageSrc: img1,
            name: "kabeer",
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
            imageSrc: img6,
            name: "Farlight 84",
        },
        {
            imageSrc: img7,
            name: "Genshin",
        },
        {
            imageSrc: img8,
            name: "Farlight 84",
        },
        {
            imageSrc: img9,
            name: "Genshin",
        },
        {
            imageSrc: img10,
            name: "Farlight 84",
        },
        {
            imageSrc: img11,
            name: "Genshin",
        },
        {
            imageSrc: img12,
            name: "Farlight 84",
        },
    ];

    const GamesCatalog = [];
    const arrayChanged = (Datas) => {
        const chunkSize = 2;
        for (let i = 0; i < Datas.length; i += chunkSize) {
            const slicedArray = Datas.slice(i, i + chunkSize);
            GamesCatalog.push({ games: slicedArray });
        }
        setArrayShow(GamesCatalog);
    };

    const common = (array, name) => {
        arrayChanged(array);
        setSelect(name);
    };

    useEffect(() => {
        arrayChanged(Games);
    }, []);

    return (
        <Container maxWidth="xl" sx={{ px: "100px !important" }}>
            <Grid sx={{ pt: 2 }}>
                <Grid className="content">
                    <Grid>
                        {state ? (
                            <Typography
                                sx={{
                                    fontSize: "32px",
                                    fontWeight: 500,
                                    color: "#FFFF",

                                    pb: 2,
                                }}
                            >
                                Game catalog
                            </Typography>
                        ) : (
                            <Skelton width="30%" height={40} style={{marginBottom:"24px"}} />
                        )}
                    </Grid>
                    <Grid container sx={{ pb: 3 }}>
                        <Grid item xs={8} sx={{ display: "flex" }}>
                            {state ? (
                                <>
                                    <Grid sx={{ pr: 2 }}>
                                        <Button
                                            sx={{
                                                ...btnSx,
                                                background:
                                                    select === "playstation"
                                                        ? "rgba(0, 238, 52, 0.15)"
                                                        : "rgba(131, 151, 195, 0.1)",
                                                color:
                                                    select === "playstation"
                                                        ? "#00EE34"
                                                        : "#FFF",
                                            }}
                                            onClick={() =>
                                                common(Games, "playstation")
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faPlaystation}
                                                style={{ ...icon }}
                                            />
                                            Playstation{" "}
                                        </Button>
                                    </Grid>
                                    <Grid sx={{ pr: 2 }}>
                                        <Button
                                            sx={{
                                                ...btnSx,
                                                background:
                                                    select === "xbox"
                                                        ? "rgba(0, 238, 52, 0.15)"
                                                        : "rgba(131, 151, 195, 0.1)",
                                                color:
                                                    select === "xbox"
                                                        ? "#00EE34"
                                                        : "#FFF",
                                            }}
                                            onClick={() =>
                                                common(Games1, "xbox")
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faXbox}
                                                style={{ ...icon }}
                                            />{" "}
                                            Xbox
                                        </Button>
                                    </Grid>
                                    <Grid sx={{ pr: 2 }}>
                                        <Button
                                            sx={{
                                                ...btnSx,
                                                background:
                                                    select === "steam"
                                                        ? "rgba(0, 238, 52, 0.15)"
                                                        : "rgba(131, 151, 195, 0.1)",
                                                color:
                                                    select === "steam"
                                                        ? "#00EE34"
                                                        : "#FFF",
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faSteam}
                                                style={{ ...icon }}
                                            />
                                            Steam{" "}
                                        </Button>
                                    </Grid>
                                    <Grid sx={{ pr: 2 }}>
                                        <Button
                                            sx={{
                                                ...btnSx,
                                                background:
                                                    select === "PC"
                                                        ? "rgba(0, 238, 52, 0.15)"
                                                        : "rgba(131, 151, 195, 0.1)",
                                                color:
                                                    select === "PC"
                                                        ? "#00EE34"
                                                        : "#FFF",
                                            }}
                                        >
                                            {" "}
                                            <FontAwesomeIcon
                                                icon={faDesktop}
                                                style={{
                                                    fontSize: 18,
                                                    paddingRight: "10px",
                                                }}
                                            />{" "}
                                            PC
                                        </Button>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    {[1, 2, 3, 4].map((index) => (
                                        <Skelton
                                            width={
                                                index === 1 || index === 3
                                                    ? "146px"
                                                    : "100px"
                                            }
                                            height={40}
                                            style={{
                                                borderRadius: 10,
                                                marginRight: "12px",
                                            }}
                                        />
                                    ))}
                                </>
                            )}
                        </Grid>

                        <Grid
                            item
                            xs={4}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Grid sx={{ pr: 2 }}>
                                <Button
                                    sx={{
                                        background: "rgba(131, 151, 195, 0.1)",
                                        borderRadius: 5,
                                        color: "#FFF",
                                        px: 2,
                                        py: 1,
                                        mt: 1,
                                    }}
                                >
                                    Bec <ChevronRightIcon />
                                </Button>
                            </Grid>

                            {GamesCatalog ? (
                                <>
                                    <button
                                        onClick={sliderRef?.slickPrev}
                                        type="button"
                                        style={{
                                            background:
                                                "rgba(131, 151, 195, 0.1)",
                                            border: "none",
                                            padding: "0px 21px 0px 19px",
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
                                            padding: "0px 21px 0px 16px",
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
                        {arrayShow.map((card, index) => (
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* {console.log("fdxcf", card)} */}
                                {card.games.map((data, index) => (
                                    <Grid sx={{ pr: 2.4 }}>
                                        <Grid
                                            sx={{
                                                background: "#005CF6",
                                                py: 0.4,
                                                px: 2,
                                                borderRadius:
                                                    "15px 15px 0px 0px",
                                                color: "#FFFF",
                                                fontSize: 16,
                                                fontWeight: 600,
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={data.icon}
                                                style={{ ...icon }}
                                            />
                                            {data.title}
                                        </Grid>
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                                height: 355,
                                                boxShadow: "none",
                                                background: "transparent",
                                            }}
                                        >
                                            <CardMedia
                                                sx={{
                                                    height: 240,
                                                    objectFit: "fill",
                                                    borderRadius:
                                                        "0px 0px 15px 15px",
                                                }}
                                                component="img"
                                                image={data.imageSrc}
                                                title="green iguana"
                                            />

                                            <Grid
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    px: 0.5,
                                                    pt: 2,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 19,
                                                        color: "#00EE34",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    20 990 KZT
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: "#8C95AD",
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        textDecoration:
                                                            "line-through",
                                                    }}
                                                >
                                                    25 990 KZT
                                                </Typography>
                                            </Grid>
                                            <Typography
                                                sx={{
                                                    pt: 0.5,
                                                    px: 0.5,
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                    color: "#8C95AD",
                                                }}
                                            >
                                                {data.name}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}

                        {!GamesCatalog && (
                            <Grid container>
                                <Grid item xs={3}>
                                    <Skeleton width="100%" height={204} />
                                    <Skeleton width="100%" height={44} />
                                    <Skeleton width="100%" height={44} />
                                </Grid>
                            </Grid>
                        )}
                    </Slider>
                </Grid>
            </Grid>
        </Container>
    );
}
