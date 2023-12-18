import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Drawercomponent from "./Drawercomponent";

const Pages = ["Home", "About", "Coming Soon", "Top seller", "Books", "Author", "Blog", "Contact"]

function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: {md:'#fff', xs:'#222'}, mt:'73px', boxShadow:'none' }}>
                <Toolbar>
                    {
                        isMatch ? (
                            <>
                                <Drawercomponent />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ textAlign:'center', color:'#050505', justifyContent:'center', ml:'20%' }}
                                    textColor='#222'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="secondary">
                                        {
                                            Pages.map((page, index) => (
                                                <Tab key={index} label={page} sx={{color:'#050505'}}/>
                                            ))
                                        }
                                </Tabs>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Header