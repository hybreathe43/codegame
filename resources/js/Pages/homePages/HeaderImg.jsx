import React, { useEffect, useState } from "react";
import headerImg from "../../../../public/image/headerImg.png";
import header2 from "../../../../public/image/header2.png";
import Chip from "@mui/material/Chip";
import img1 from "../../../../public/image/headerDownimg1.png";
import img2 from "../../../../public/image/headerDownimg2.png";
import img3 from "../../../../public/image/headerDownimg3.png";
import img4 from "../../../../public/image/headerDownimg4.png";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";
import { CardMedia, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import Skeleton from "@mui/material/Skeleton";
import Avatar from '@mui/material/Avatar';

const HeaderImg = () => {
    const [show, setshow] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setshow(true)
        }, 2000);
    },[])

    return (
        <Container maxWidth="xl" sx={{ mt: 15.5, px: "100px !important" }}>
        {show ? ( <Grid
            container
            sx={{
                display: "flex",
                borderRadius: 6,
                overflow: "hidden",
            }}
        >
            <Grid
                sx={{
                    background: `url(${header2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px", // Set the height or adjust as needed
                    width: "10%", // Set width to 100%
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                }}
            ></Grid>
            <Grid
                sx={{
                    background: `url(${headerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px", // Set the height or adjust as needed
                    width: "90%", // Set width to 100%
                    opacity: 1,
                    color: "#fff",
                    position: "relative",
                }}
            >
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        px: 2,
                        pt: 1,
                    }}
                >
                    <Chip
                        label="HIT"
                        sx={{
                            background: "#EBFF00",
                            color: "#14171E",
                            fontSize: 18,
                            px: 0.2,
                            fontWeight: 600,
                        }}
                    />
                </Grid>

                <Grid
                    sx={{
                        position: "absolute",
                        zIndex: 1,
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "20%",
                        background:
                            "linear-gradient(90deg, rgba(10, 11, 24, 1),rgba(10, 11, 24, 0.83),rgba(10, 11, 24, 0))",
                    }}
                >
                    {" "}
                </Grid>

                <Grid
                    sx={{
                        position: "absolute",
                        zIndex: 1,
                        top: 70,
                        left: -60,
                    }}
                >
                    <Typography
                        sx={{
                            Font: "Nunito Sans",
                            Weight: 800,
                            fontSize: "48px",
                        }}
                    >
                        WEEK OF DISCOUNTS
                        <br />
                        ON PUPG MOBILE
                    </Typography>
                    <Button
                        style={{ background: "#00EE34", color: "#000" }}
                        sx={{ px: 2, borderRadius: 2 }}
                    >
                        Забрать, скидку!
                    </Button>
                </Grid>
                <Grid
                    sx={{
                        position: "absolute",
                        zIndex: 1,
                        bottom: 10,
                        right: 10,
                        display: "flex",
                    }}
                >

<Box sx={{ position: "relative", display: "inline-flex",mr:2 }}>
                        <CircularProgress sx={{color:"#00EE34"}} variant="determinate" value={75} />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                             <CardMedia
                        sx={{ borderRadius: 8, p:"3px" }}
                        component="img"
                        image={img1}
                        alt="Paella dish"
                    />
                        </Box>
                    </Box>

                    <CardMedia
                        sx={{ borderRadius: 4, mr: 2 }}
                        component="img"
                        image={img2}
                        alt="Paella dish"
                    />
                    {/* <CardMedia
                        sx={{ borderRadius: 4, mr: 2 }}
                        component="img"
                        image={img3}
                        alt="Paella dish"
                    /> */}
                    <Avatar sx={{mr:2}} alt="Remy Sharp" src={img3} />



                    <CardMedia
                        sx={{ borderRadius: 4, mr: 2 }}
                        component="img"
                        image={img4}
                        alt="Paella dish"
                    />
                </Grid>
            </Grid>
        </Grid>) : (<Skeleton
            variant="rectangular"
            width="100%"
            height={400}
            style={{ backgroundColor: '#1B2037' }}
        />)}
</Container>
    );
};

export default HeaderImg;
