import { FormatQuote } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import React from "react"
import Img10 from "../images/person_1.jpg.webp"
import Img11 from "../images/person_2.jpg.webp"
import Img12 from "../images/person_3.jpg.webp"
import Img13 from "../images/bg_4.jpg.webp"


function Clients() {
    return (
        <React.Fragment>

            <Box sx={styles.clientsbg}>
                <Box >
                    <Typography sx={styles.testi}>TESTIMONIALS</Typography>
                    <Typography sx={styles.kinds}>Kinds Words From Clients</Typography>

                    <Box sx={styles.review}>
                        <Box sx={styles.review1}>
                            <IconButton sx={styles.iconButtons}>
                                <FormatQuote sx={styles.button} />
                            </IconButton>
                            <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam qui recusandae iure sequi id perspiciatis reprehenderit eaque quisquam suscipit.</Typography>
                            <Box sx={styles.reviewImg}>
                                <img src={Img10} style={{ width: '70px', height: '70px', borderRadius: '50%' }}  alt='img'/>
                                <Typography sx={styles.ism}>Roger Scott <Typography sx={styles.kasb}>Marketing Manager</Typography></Typography>
                            </Box>
                        </Box>
                        <Box sx={styles.review1}>
                            <IconButton sx={styles.iconButtons}>
                                <FormatQuote sx={styles.button} />
                            </IconButton>
                            <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam qui recusandae iure sequi id perspiciatis reprehenderit eaque quisquam suscipit.</Typography>
                            <Box sx={styles.reviewImg}>
                                <img src={Img11} style={{ width: '70px', height: '70px', borderRadius: '50%' }}  alt='img'/>
                                <Typography sx={styles.ism}>Roger Scott <Typography sx={styles.kasb}>Marketing Manager</Typography></Typography>
                            </Box>
                        </Box>
                        <Box sx={styles.review1}>
                            <IconButton sx={styles.iconButtons}>
                                <FormatQuote sx={styles.button} />
                            </IconButton>
                            <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam qui recusandae iure sequi id perspiciatis reprehenderit eaque quisquam suscipit.</Typography>
                            <Box sx={styles.reviewImg}>
                                <img src={Img12} style={{ width: '70px', height: '70px', borderRadius: '50%',  }}  alt='img'/>
                                <Typography sx={styles.ism}>Roger Scott <Typography sx={styles.kasb}>Marketing Manager</Typography></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </React.Fragment>
    )
}

export default Clients

const styles = {
    clientsbg: {
        background: {md:`url(${Img13})`, xs:'none'},
        width: '100%',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPosition: 'center',
        justifyContent: 'center',
    },
    testi: {
        color: '#FF7B5D',
        fontSize: { md: '15px', xs: '18px' },
        textAlign: 'center',
        letterSpacing: 3,
        mt:{md:'320px', xs:'500px'}
    },
    kinds: {
        color: {md:'#fff', xs:'#222'},
        textAlign: 'center',
        fontSize: { md: '40px', xs: '50px' },
        fontFamily: 'Monoscape'
    },
    review: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
        gap: '25px',
        m: { md: '10% 12% 0 12%', xs: '3%' },
        justifyContent: 'left'
    },
    reviewImg: {
        display: 'flex',
        flexDirection: 'row',
        p: '4% 0 2% 3%',
        boxShadow:{xs:'1px 1px  #eee'},
        mt:{xs:'30px'}
    },
    review1: {
        background: '#fff',
    },
    iconButtons: {
        background: '#95ADBD',
        "&:hover": {
            background: '#95ADBD',
        },
        alignItem: 'left',
        mt: '-4%',
        ml: '5%'
    },
    button: {
        color: '#fff',
        fontSize: '2rem'
    },
    lorem: {
        fontSize: '14px',
        p: '3% ',
        color: '#909090'
    },
    ism: {
        fontWeight: '1000',
        fontSize: '18px',
        ml: '5%',
        fontFamily: 'Monoscape'
    },
    kasb: {
        fontSize: '15px',
        color: '#909090'
    }
}