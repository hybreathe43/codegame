import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import img1 from "../../../../public/image/IMG/imge1.png";
import img2 from "../../../../public/image/IMG/imge2.png";
import img3 from "../../../../public/image/IMG/imge3.png";
import img4 from "../../../../public/image/IMG/imge4.png";
import img5 from "../../../../public/image/IMG/imge5.png";
import img6 from "../../../../public/image/IMG/imge6.png";
import img7 from "../../../../public/image/IMG/imge7.png";
import {
    CardMedia,
    Container,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import Skelton from "./Skelton";
import { changeSkel } from "../action/index";

const ServicesCatalog = () => {
    const state = useSelector((state) => state.changeSkelton);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(changeSkel());
        }, 2000);
    }, []);
    return (
        <Container maxWidth="xl" sx={{ mt: 7, px: "100px !important" }}>
            {state ? (
                <Typography
                    sx={{
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "#FFFF",

                        pb: 3,
                    }}
                >
                    Services catalog
                </Typography>
            ) : (
                <Skeleton
                    width="50%"
                    height={60}
                    style={{ backgroundColor: "#1B2037", marginBottom: "20px" }}
                />
            )}

            <Grid container spacing={2}>
                {state ? (
                    <>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={img1}
                                alt="not"
                                sx={{
                                    height: "318px",
                                    objectFit: "fill",
                                    mb: "12px",
                                }}
                            />
                            <CardMedia
                                component="img"
                                image={img2}
                                alt="not"
                                style={{ height: "323px", objectFit: "fill" }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={img3}
                                alt="not"
                                style={{ height: "415px", objectFit: "fill" }}
                            />
                            <CardMedia
                                component="img"
                                image={img4}
                                alt="not"
                                style={{ height: "200px", objectFit: "fill" }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={img5}
                                alt="not"
                                style={{ height: "270px", objectFit: "fill" }}
                            />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        image={img6}
                                        alt="not"
                                        style={{
                                            height: "345px",
                                            objectFit: "fill",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        image={img7}
                                        alt="not"
                                        style={{
                                            height: "345px",
                                            objectFit: "fill",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Skelton width={305} height={318} />
                            <Grid sx={{ pt: 2 }}>
                                {" "}
                                <Skelton width={305} height={323} />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Skelton width={303} height={413} />
                            <Grid sx={{ pt: 2 }}>
                                {" "}
                                <Skelton width={303} height={228} />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Skelton height={289} width={632} />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Skelton height={352} width={308} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Skelton height={352} width={308} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default ServicesCatalog;
