import { IconButton, Paper, Box, InputBase } from "@mui/material"
import React from "react";
import { AppBar, Toolbar, Typography, } from "@mui/material";
import { Facebook, Instagram, Pinterest, Twitter, Search } from "@mui/icons-material";


function Header2() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <AppBar sx={{
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    display: 'flex',
                    justifyContent: 'space'
                }}>
                    <Toolbar>
                        <Box sx={styles.icons}>
                            <IconButton sx={styles.iconButtonn}>
                                <Facebook />
                            </IconButton>
                            <IconButton sx={styles.iconButtonn}>
                                <Twitter />
                            </IconButton>
                            <IconButton sx={styles.iconButtonn}>
                                <Instagram />
                            </IconButton>
                            <IconButton sx={styles.iconButtonn}>
                                <Pinterest />
                            </IconButton>
                        </Box>
                        <Box sx={styles.headerTypos}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bolder', fontFamily: 'Open Sans', color: '#222', display: 'flex', flexDirection: 'row' }}>
                                Publishing <Typography sx={{ color: '#FF7B5D', fontSize: '30px', ml: "1%" }}>Company</Typography>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: 200, fontFamily: 'Open Sans', color: '#C1C1C1', lineHeight: '1.3', mt: '1%', letterSpacing: 3, }}>Book Publishing Company</Typography>
                        </Box>
                        <Box sx={{ ml: 'auto' }}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: {md:'flex', xs:'none'}, alignItems: 'center', width: 400, borderRadius: '40px' }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1, color: '#222' }}
                                    placeholder="Search here..."
                                    inputProps={{ 'aria-label': 'search here...' }}
                                />
                                <IconButton type="button" sx={{ p: '10px', background: '#95ADBD', mr: 0, "&:hover": { background: '#95ADBD', } }} aria-label="search">
                                    <Search />
                                </IconButton>
                                <Search sx={{ p: '10px', background: '#95ADBD', mr: 0, "&:hover": { background: '#95ADBD', }, display:{md:'none', xs:'block'} }}/>
                            </Paper>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </React.Fragment>
    )
}

export default Header2

const styles = {
    icons: {
        display: {md:'flex', xs:'none'},
        flexDirection: 'row',
        gap: '7px',
        marginLeft: '2%'
    },
    iconButtonn: {
        padding: '5px',
        background: '#fff',
        border: '.1rem solid #f2f2f2',
        color: '#4D4D4D',
        "&:hover": {
            background: '#fff',
            border: '.1rem solid #f2f2f2',
            color: '#222',
        }
    },
    headerTypos: {
        ml: 'auto',
        display: 'flex',
        flexDirection: 'column'
    }
}