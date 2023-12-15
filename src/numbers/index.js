import { Box, Typography } from "@mui/material";
import React from "react";

function Numbers() {
    return (
        <React.Fragment>
            <Box sx={styles.boxes}>
                <Box sx={styles.boxesBox}>
                    <Box sx={styles.box1}>
                        <Typography sx={styles.number1}>75,680</Typography>
                        <Typography sx={styles.numberWord}>ACTIVE READERS</Typography>
                    </Box>
                    <Box sx={styles.box1}>
                        <Typography sx={styles.number1}>3,040</Typography>
                        <Typography sx={styles.numberWord}>TOTAL PAGES</Typography>
                    </Box>
                </Box>
                <Box sx={styles.boxesBox}>
                    <Box sx={styles.box1}>
                        <Typography sx={styles.number1}>283</Typography>
                        <Typography sx={styles.numberWord}>CUP OF COFFEE</Typography>
                    </Box>
                    <Box sx={styles.box1}>
                        <Typography sx={styles.number1}>14,500</Typography>
                        <Typography sx={styles.numberWord}>FACEBOOK FANS</Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Numbers

const styles = {
    boxes: {
        display: 'flex',
        flexDirection: {md:"row", xs:'column'},
        justifyContent:'center',
        gap: '50px',
        background: '#F5F4F0',
        width: '100%',
        padding:'3rem 0',
        mt:{md:'200px', xs:'1000px'}
    },
    number1: {
        fontSize: { md: '35px', xs: '45px' },
        fontFamily: 'Verdana',
        color: '#000',
        fontWeight: '500',
        textAlign:'center',
    }, 
    numberWord: {
        fontSize: { md: '15px', xs: '18px' },
        fontFamily: 'Monoscape',
        textAlign:'center',
        color: '#ABABA8',
        letterSpacing: 3
    },
    boxesBox:{
        display:'flex',
        flexDirection: {md:"row", xs:'column'},
        justifyContent:'center',
        gap: '30px',
    }
}