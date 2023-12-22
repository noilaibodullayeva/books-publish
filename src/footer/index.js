import { Facebook, Flag, Phone, Pinterest, Telegram, Twitter } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import React from "react"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Footer() {
    return (
        <React.Fragment>
            <Box sx={{
                background: '#1A1A1A',
                height: {md:'400px', xs:'auto'},
                width:'100%'
            }}>
                <Box sx={styles.boxFooter}>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Connect</Typography>
                        <Typography sx={styles.loremm}>Far far away, behind the word mountains, far from the countries.</Typography>
                        <Box sx={styles.icons}>
                            <IconButton sx={styles.buttonn}>
                                <Facebook sx={{ color: '#fff', fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton sx={styles.buttonn}>
                                <Twitter sx={{ color: '#fff', fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton sx={styles.buttonn}>
                                <Pinterest sx={{ color: '#fff', fontSize: '2rem' }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Extra Links</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />  Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Affilatte programm</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Legal</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />  Join Us</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Blog</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Privacy & Policy</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Term & Conditions</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Company</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon /> About Us</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Blog</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Contact</Typography>
                        <Typography sx={styles.typolink}><ChevronRightIcon />Careers</Typography>
                    </Box>
                    <Box sx={styles.bocFooter}>
                        <Typography sx={styles.stilSoz}>Have a Question?</Typography>
                        <Typography sx={styles.typolink1}><Flag />  203, Fake St. Moun tain view, California, USA</Typography>
                        <Typography sx={styles.typolink}><Phone />+2 369 258 147</Typography>
                        <Typography sx={styles.typolink}><Telegram />info@yourdemain.com</Typography>
                    </Box>
                </Box>
                <Box sx={{
                background: '#000000',
                height: {md:'120px', xs:'auto'},
                width:'100%',
                mt:'0'
            }}>
                    <Typography sx={styles.resived}>Copyright 2023 All rights reserved | This template is made with 🖤 by<Typography sx={styles.miss}>Colorib.com</Typography> </Typography>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default Footer

const styles = {
    boxFooter: {
        display: 'flex',
        flexDirection:{md:'row', xs:'column'},
        justifyContent:'center',
        gap: '30px',
        m: { md: '8% 5% 0 5%' , xs: '3%' },
        pt:'5%',
        pb:'3%'
    },
    bocFooter: {
        mt: '5%',
        gap:'2%'
    },
    stilSoz: {
        fontSize: '25px',
        color: '#FFFFFF',
        mb: '5%'
    },
    loremm: {
        fontSize: '17px',
        color: '#FFFFFF',
        mb: '1%',
        width:'200px'
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        mt: '1rem'
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
    typolink: {
        color: '#E4E4E4',
        fontSize: '17px',
        display: 'flex',
        flexDirection: 'row',
        m: '5px'
    },
     typolink1: {
        color: '#E4E4E4',
        fontSize: '17px',
        display: 'flex',
        flexDirection: 'row',
        m: '5px',
        width:'200px'
    },
     resived: {
            fontSize: '1.2rem',
            color: '#808080',
            fontWeight: 'lighter',
            padding: '1.5rem',
            textTransform: 'lowercase',
            display: 'flex',
            flexDirection: 'row',
            textAlign:'center',
            justifyContent:'center'
        },
        miss: {
            color: '#fff',
            fontSize:'1.2rem',
            padding:'0 1.5px'
        }
}