import {  CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';

import IMG1 from "../../../../public/image/Seoimages/seoimg1.png"
import IMG2 from "../../../../public/image/Seoimages/seoimg2.png"
import IMG3 from "../../../../public/image/Seoimages/seoimg3.png"

const data=[
    {image:IMG3,title:"Получение",description:"Удобный способ оплата, Visa/Mastercard, карты МИР, Google Pay, Apple Pay, Юmoney и другие."},
    {image:IMG2,title:"Оплата",description:"Удобный способ оплата, Visa/Mastercard, карты МИР, Google Pay, Apple Pay, Юmoney и другие."},
    {image:IMG1,title:"Доставка",description:"Удобный способ оплата, Visa/Mastercard, карты МИР, Google Pay, Apple Pay, Юmoney и другие."},
]

const SEOBlock = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 7,mb:3, px: "100px !important" }}>
    <Grid   sx={{pb:4}}>
<Grid container sx={{background:"rgba(131, 151, 195, 0.1)",borderRadius:3,color:"#FFF",px:5,py:4,boxShadow:2}}>
 <Typography sx={{fontSize:'32px',color:'#FFFF',fontWeight:"600",pb:2}}>SEO-БЛОК</Typography>
 <Divider sx={{borderWidth:"1px",width:'100%',borderColor:"rgba(131, 151, 195, 0.2)"}}/>
 {data.map((item, index) => (
  item ? (
    <Grid container key={index} sx={{ pt: 4, pb: 1.5 }}>
      <Grid item xs={1.5}>
        {/* <img src={item.image} alt='not' /> */}
        <CardMedia
                                    component="img"
                                    sx={{
                                        height: "110px",
                                        width:"110px",
                                        objectFit: "fill",
                                    }}
                                    image={item.image}
                                    alt="Paella dish"
                                />
        </Grid>
      <Grid item xs={8}>
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>{item.title}</Typography>
        <Typography sx={{ pt: 3 }}>{item.description}</Typography>
      </Grid>
    </Grid>
  ) : (
    <Skeleton key={index} variant="rectangular" width={210} height={60} />
  )
))}

</Grid>


    </Grid></Container>
  )
}

export default SEOBlock
