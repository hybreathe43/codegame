import Skeleton from "@mui/material/Skeleton";
import { Typography, CardMedia, Grid, Card, Container } from "@mui/material";
import img1 from "../../../../public/image/newsAndPromotion/news1.png";
import img2 from "../../../../public/image/newsAndPromotion/news2.png";
import img3 from "../../../../public/image/newsAndPromotion/news3.png";
import img4 from "../../../../public/image/newsAndPromotion/news4.png";
import { useSelector, useDispatch } from "react-redux";
import { changeSkel } from "../action/index";
import Skelton from "./Skelton";

export default function NewsPromotion() {
    const state = useSelector((state) => state.changeSkelton);
    const dispatch = useDispatch();

    const pricingCards = [
        {
            imageSrc: img1,
            name: "Осенняя распродажа  STEAM",
            desc: "Четыре раза в году мы проводим крупные сезонные распродажи.",
            date: "ОПУБЛИКОВАНО, 24 окт 2023",
        },
        {
            imageSrc: img2,
            name: "Распродажа Playstation",
            desc: "Четыре раза в году мы проводим крупные сезонные распродажи.",
            date: "ОПУБЛИКОВАНО, 24 окт 2023",
        },
        {
            imageSrc: img3,
            name: "Фестиваль «Играм быть»",
            desc: "Четыре раза в году мы проводим крупные сезонные распродажи.",
            date: "ОПУБЛИКОВАНО, 24 окт 2023",
        },
        {
            imageSrc: img4,
            name: "Распродажа Xbox",
            desc: "Четыре раза в году мы проводим крупные сезонные распродажи.",
            date: "ОПУБЛИКОВАНО, 24 окт 2023",
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ mt: 0.1, px: "100px !important" }}>
            <Grid sx={{ pt: 0, pb: 4 }}>
                <Grid container sx={{ pb: 4 }}>
                    {state ? (
                        <Typography
                            sx={{
                                fontSize: "32px",
                                fontWeight: 500,
                                color: "#FFFF",
                            }}
                        >
                            News and promotions
                        </Typography>
                    ) : (
                        <Skeleton width="50%" height={70} />
                    )}
                </Grid>

                <Grid container>

                {state ?

                (<>
                    {pricingCards.map((card, index) => (
                        <Grid item xs={3} sx={{ pr: 2.4 }} key={index}>
                            <Card
                                sx={{
                                    background: "#101328",
                                    boxShadow:
                                        " 0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 1px 100px 0px rgba(0,0,0,0.12); !important",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: "187px",
                                        objectFit: "fill",
                                        borderRadius: 3,
                                    }}
                                    image={card.imageSrc}
                                    alt="Paella dish"
                                />
                                <Typography
                                    sx={{
                                        pt: 2,
                                        pl: 0.5,
                                        pr: 2.5,
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {card.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                        pt: 1,
                                    }}
                                >
                                    {card.desc}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "#8C95AD",
                                        py: 2,
                                    }}
                                >
                                    {card.date}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                    </>
                )
                :  (
                    <>
                    {[1, 2, 3, 4].map((data, index) => (
                        <Grid item xs={3} key={index} sx={{ pr: 2 }}>
                            <Skelton
                                width={305}
                                height={187}

                            />
                            <Skelton
                             width={227}
                             height={46}
                                style={{
                                    borderRadius:2,
                                    marginTop:"20px"
                                }}
                            />
                            <Skelton
                              width={178}
                              height={37}
                                style={{
                                    borderRadius:2,
                                    marginTop:"8px"
                                }}
                            />
                            <Skelton
                              width={219}
                              height={24}
                                style={{
                                    borderRadius:1,
                                    marginTop:"12px"
                                }}
                            />
                        </Grid>
                    ))}
                    </>
                )}

                </Grid>

            </Grid>
        </Container>
    );
}
