import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Img1 from "../images/about-1.jpg.webp"

function About() {
    return (
        <React.Fragment>
            <Box sx={styles.boxAbout}>
                <Box sx={styles.aboutImg}></Box>
                <Box sx={styles.aboutWord}>
                    <Typography sx={styles.publish}>Welcome To Publishing Company</Typography>
                    <Typography sx={styles.company}>Publishing Company Created By Authors</Typography>
                    <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi rem earum ex. Consectetur officiis magni reprehenderit doloribus reiciendis perferendis!</Typography>
                    <Typography sx={styles.lorem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolor libero molestiae quis eum officia cum beatae, nesciunt iusto maiores quidem natus quas. Qui vitae explicabo praesentium unde voluptatem amet.</Typography>
                    <Button variant='standart' sx={styles.button}>View All The Authors</Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default About

const styles = {
    boxAbout: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'center',
        gap: '30px',
        width: '100%',
    },
    aboutImg: {
        display:{md:'block', xs:'none'},
        background: `url(${Img1})`,
        backgroundRepeat: "no-repeat",
        flexDirection: 'column',
        height: '500px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        justifyContent: 'center',
        width: { md: '500px', xs: 'auto' },
        m: { md: '3% 0 3% 200px', xs: '0 0 0 2%' }
    },
    aboutWord: {
        m: { md: '6% 200px 3% 0', xs: '0 2% 1% 2%' }
    },
    publish: {
        color: '#FF7B5D',
        fontSize: {md:'15px', xs:'18px'},
        letterSpacing: 3,
        mt:{md:0, xs:'20%'},
    },
    company: {
        fontSize: { md: '30px', xs: '35px' },
        fontFamily: 'Roboto',
        color: '#020202',
        width: { md: '300px', xs: 'auto' },
        fontWeight: 'bold',
        lineHeight: '-5',
    },
    lorem: {
        fontSize: { md: '16px', xs: '18px' },
        fontFamily: 'Roboto',
        color: '#A6A6A6',
        width: { md: '400px', xs: 'auto' },
        m: '2% 0'
    },
    button: {
        background: '#95ADBD',
        color: '#fff',
        ml: '1%',
        marginTop: '20px',
        height:  '50px',
        width:   '200px',
        "&:hover": {
            background: '#95ADBD',
            color: '#fff',
        },
        fontSize: '13px',
        mb:{md:0, xs:'20%'}
    }
}