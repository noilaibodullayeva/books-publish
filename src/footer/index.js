import { Facebook, Pinterest, Twitter } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import React from "react"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Footer() {
    return (
        <React.Fragment>
            <Box sx={{
                background: '#1A1A1A',
                height: '600px',
            }}>
                <Box sx={styles.boxFooter}>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Connect</Typography>
                        <Typography sx={styles.loremm}>Far far away, behind the word mountains, far from the countries.</Typography>
                        <Box sx={styles.icons}>
                            <IconButton sx={styles.buttonn}>
                                <Facebook sx={styles.iconss} />
                            </IconButton>
                            <IconButton sx={styles.buttonn}>
                                <Twitter sx={styles.iconss} />
                            </IconButton>
                            <IconButton sx={styles.buttonn}>
                                <Pinterest sx={styles.iconss} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Extra Links</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />  Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon /> Affilatte programm</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Legal</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Company</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Have a Question?</Typography>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default Footer

const styles = {
    boxFooter: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(5rem, 1fr))',
        gap: '15px',
        m: { md: '5%', xs: '3%' }
    },
    bocFooter: {
        mt: '5%'
    },
    stilSoz: {
        fontSize: '25px',
        color: '#FFFFFF',
        mb: '5%'
    },
    loremm: {
        fontSize: '17px',
        color: '#FFFFFF',
        mb: '1%'
    },
    icons: {
        display: 'flex',
        flexDirection: 'row'
    },
    buttonn: {
        background: '#95ADBD',
        "&:hover": {
            background: '#95ADBD',
        },
        color: '#fff'
    },
    iconss: {
        padding: '1rem',
        color: '#fff'
    },
    typolink:{
        color:'#E4E4E4',
        fontSize:'17px',
        display:'flex',
        flexDirection:'row',
        m:'2px'
    }
}