import { Box, Button, Typography } from "@mui/material"
import React from "react"
import bgImage from "../images/bg_1.jpg.webp"
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
        backgroundPositionY: 1,
        justifyContent: 'center',
    },
    typos: {
        ml: { md: '200px', sm:'5%', xs: '3%' }
    },
    books: {
        fontSize: {md:'60px', xs:'30px'},
        fontFamily: 'Roboto',
        color: '#020202',
        width: '700px',
        fontWeight: 'bold',
        lineHeight: '-5'
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
        height: '60px',
        width: '170px',
        "&:hover": {
            background: '#95ADBD',
            color: '#fff',
        }
    },
    button2: {
        background: '#fff',
        color: '#95ADBD',
        ml: '1%',
        marginTop: '20px',
        height: '60px',
        width: '170px',
        "&:hover": {
            background: '#fff',
            color: '#95ADBD',
        }
    },
}
