import { Button, Card, CardMedia, Container, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import logo from "../../../public/image/logoGreen.png";
import IMG1 from "../../../public/image/socialMedia/inst.png";
import IMG2 from "../../../public/image/socialMedia/telegram.png";
import IMG3 from "../../../public/image/socialMedia/tiktok.png";
import IMG4 from "../../../public/image/socialMedia/vk.png";
import IMG5 from "../../../public/image/socialMedia/yt.png";
import flag from "../../../public/image/kazakhstan.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pay1 from "../../../public/image/paymentMethod/Pay1.svg"
import pay2 from "../../../public/image/paymentMethod/Pay2.svg"
import pay3 from "../../../public/image/paymentMethod/Pay3.svg"
import pay4 from "../../../public/image/paymentMethod/Pay4.svg"
import pay5 from "../../../public/image/paymentMethod/Pay5.svg"
import union from "../../../public/image/Union.png"

const text_sx={
   fontSize:16,fontWeight:500,pb:0.4
}
const text_color={color:"#848CA1"}

const Social_Media = [
    {
        image: IMG2,
    },
    {
        image: IMG3,
    },
    {
        image: IMG4,
    },
    {
        image: IMG1,
    },
    {
        image: IMG5,
    },
];

const PaymentMethod=[
    {image:pay1},
    {image:pay2},
    {image:pay3},
    {image:pay4},
    {image:pay5},
]

const footerGames=[{name:"Steam"},{name:"Pubg"},{name:"Контакты"},{name:"О компании"}]

const Footer = () => {
    return (
        <>
        <Container maxWidth="xl" sx={{ px: "100px !important" }}>
        <Grid container sx={{ pt: 4,pb:8 }}>
            <Grid item xs={4}>
                <img src={logo} alt="not" />
                <Typography sx={{ color: "#848CA1", pt: 1 }}>
                    © 2023 codegames.gg. All right reserved
                </Typography>
                <Grid container sx={{ pt: 3 }}>
                    {Social_Media.map((data, index) => (
                        <Grid
                        key={index}
                            item
                            xs={1}
                            sx={{
                                background: "rgba(131, 151, 195, 0.1)",
                                borderRadius: 12,
                                p: 1,
                                mr: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={data.image}
                                alt="not"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{ color: "#FFFF", fontWeight: 500 }}>
                    Регион
                </Typography>
                <Grid container sx={{pt:1}}>
                    <Grid item xs={5}>
                        <Button
                            style={{
                                color: "#fff",
                                background: "#2F3654",
                                // border: "2px solid #00EE34",
                                borderRadius: "12px",
                                padding: "5px 10px",
                            }}
                        >
                            <img src={flag} alt="not" />

                            <Typography
                                variant="overline"
                                sx={{ pt: 0.1, px: 1 }}
                            >
                                Kazakhstan
                            </Typography>
                            <ExpandMoreIcon />
                        </Button>
                    </Grid>
                    <Grid
                            item
                            xs={4}
                            sx={{  }}
                        >
                            <Button
                                style={{
                                    color: "#fff",
                                    background: "#2F3654",
                                    // border: "2px solid #00EE34",
                                    borderRadius: "12px",
                                    padding: "5px 10px",
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{ pt: 0.1, px: 1 }}
                                >
                                    KZT
                                </Typography>
                                <ExpandMoreIcon />
                            </Button>
                        </Grid>
                </Grid>
                <Typography sx={{color:"#FFFF",pt:4,pb:1}}>Служба поддержки</Typography>
                <Button
                            style={{
                                color: "rgba(255, 255, 255, 1)",
                                background: "#2F3654",
                                // border: "2px solid #00EE34",
                                borderRadius: "12px",
                                padding: "5px 10px",
                            }}
                        >
                            <img src={IMG2} alt="not" style={{padding:"1px",background:"#FFFF",borderRadius:20}}/>

                            <Typography
                                variant="overline"
                                sx={{ pt: 0.2, px: 1 ,fontSize:12}}
                            >
                                Official Telegram
                            </Typography>
                        </Button>

            </Grid>
            <Grid item xs={4}>
            <Grid container sx={{pt:1}}>
                    <Grid item xs={4} >
                        {footerGames.map((data,index)=>(
                            <Typography key={index} sx={{...text_sx,color:"#848CA1",}}>{data.name}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} >
                        <Typography sx={{...text_sx,color:"#848CA1",}}>По вопросам сотрудничества <br/> и  предложений</Typography>
                        <Link sx={{fontSize:16,fontWeight:500,pb:0.4}}>info@codegame.gg</Link>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>


        </Container>
        <Divider sx={{borderColor:"rgba(255, 255, 255, 0.05)",borderWidth:"1px"}} />
        <Container maxWidth="xl" sx={{ px: "100px !important",py:1.4 }}>
           <Grid container>
        <Grid item xs={8}>
            {PaymentMethod.map((data,index)=>(
            <Button
                key={index}
            sx={{
                                color: "rgba(255, 255, 255, 1)",
                                background: "#2F3654",
                                // border: "2px solid #00EE34",
                                borderRadius: "9px",
                                p: "10px 0px",
                                mr:1.5
                            }}
                        >
                       <img src={data.image} alt="not" style={{height:"16px"}} />


                        </Button>))}


           </Grid>
            <Grid item xs={4} sx={{display:"flex",justifyContent:"space-around"}}>
<Typography sx={{...text_sx,...text_color}}>FAQ</Typography>
<Typography sx={{...text_sx,...text_color}}>Политика конфиденциальности</Typography>
<Typography sx={{...text_sx,...text_color}}>Договор оферты</Typography>
                </Grid>
                </Grid>
        </Container>
        </>
    );
};

export default Footer;
