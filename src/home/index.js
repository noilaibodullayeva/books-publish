import { Box, Button, IconButton, Typography } from "@mui/material"
import React from "react"
import bgImage from "../images/bg_1.jpg.webp"
import { BedroomBaby, Business, Diversity2, HistoryEdu } from "@mui/icons-material"
function Home() {
    return (
        <React.Fragment>
            <Box sx={styles.bg}>
                <Box sx={styles.typos}>
                    <Typography sx={styles.books}>
                        Good books don't give up all their secrets at once
                    </Typography>
                    <Typography sx={styles.river}>
                        A small river named Duden flows by their place and supplies it with the neseccary regelialia.
                    </Typography>
                    <Button variant='standard' sx={styles.button1}>View All Books</Button>
                    <Button variant='standard' sx={styles.button2}>Explore now</Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    justifyContent: 'center',
                    margin: { md: '80px 200px 0 200px', xs:'1300px 0 0 0' },
                }}>
                    <Box sx={styles.iconBox}>
                        <IconButton sx={styles.iconbutton}>
                            <BedroomBaby sx={styles.iconbusi} />
                        </IconButton>
                        <Typography sx={styles.children}>Children's book</Typography>
                        <Typography sx={styles.loremm}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos quia repellendus ipsa officiis id fuga!</Typography>
                    </Box>
                    <Box sx={styles.iconBox}>
                        <IconButton sx={styles.iconbutton}>
                            <Diversity2 sx={styles.iconbusi} />
                        </IconButton>
                        <Typography sx={styles.children}>Romance</Typography>
                        <Typography sx={styles.loremm}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos quia repellendus ipsa officiis id fuga!</Typography>
                    </Box>
                    <Box sx={styles.iconBox}>
                        <IconButton sx={styles.iconbutton}>
                            <Business sx={styles.iconbusi} />
                        </IconButton>
                        <Typography sx={styles.children}>Art&Architecture</Typography>
                        <Typography sx={styles.loremm}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos quia repellendus ipsa officiis id fuga!</Typography>
                    </Box>
                    <Box sx={styles.iconBox}>
                        <IconButton sx={styles.iconbutton}>
                            <HistoryEdu sx={styles.iconbusi} />
                        </IconButton>
                        <Typography sx={styles.children}>History</Typography>
                        <Typography sx={styles.loremm}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quos quia repellendus ipsa officiis id fuga!</Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home

const styles = {
    bg: {
        background: `url(${bgImage})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
        height: '730px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPosition: 'top',
        justifyContent: 'center',
    },
    typos: {
        ml: { md: '200px', sm: '5%', xs: '3%' },
        mt: {md:'500px', xs:'0'}
    },
    books: {
        fontSize: { md: '60px', xs: '30px' },
        fontFamily: 'Roboto',
        color: '#020202',
        width: { md: '700px', xs: 'auto' },
        fontWeight: 'bold',
        lineHeight: '-5',
        mt:0,
    },
    river: {
        fontSize: '16px',
        fontFamily: 'Roboto',
        color: '#a2a2a5',
    },
    button1: {
        background: '#95ADBD',
        color: '#fff',
        marginTop: '20px',
        height: { md: '60px', xs: '40px' },
        width: { md: '170px', xs: '120px' },
        "&:hover": {
            background: '#fff',
            color: '#95ADBD',
        },
        fontSize: { md: '15px', xs: '10px' }
    },
    button2: {
        background: '#fff',
        color: '#95ADBD',
        ml: '1%',
        marginTop: '20px',
        height: { md: '60px', xs: '40px' },
        width: { md: '170px', xs: '120px' },
        "&:hover": {
            background: '#95ADBD',
            color: '#fff',
        },
        fontSize: { md: '15px', xs: '10px' }
    },
    iconBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems:'center'
    },
    iconbutton: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: '#F5F4F0',
        textAlign: 'center',
        "&:hover": {
            background: '#F5F4F0',
        },
        verticalAlign:'center'
    },
    iconbusi: {
        fontSize: '3rem',
        padding: '2rem',
        color: '#161616'
    },
    children: {
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        m: '4% 0 0 0',
    },
    loremm:{
        fontSize: '16px',
        fontFamily: 'Roboto',
        m: '4% 0 0 0',
        color:'#9D9D9D'
    }
}
