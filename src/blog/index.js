import { Box, Typography } from "@mui/material"
import React from "react"
import Img16 from "../images/image_1.jpg.webp"
import Img17 from "../images/image_2.jpg.webp"
import Img18 from "../images/image_3.jpg.webp"

function Blog() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={styles.testi}>BLOG</Typography>
                <Typography sx={styles.kinds}>Recent Blog</Typography>
                <Box sx={styles.boxBlog}>
                    <Box sx={styles.box1Blog}>
                        <img src={Img16} alt="..." style={{ width: '100%', height: '200px', zIndex: '600', position:'relative', objectFit: 'cover' }} />
                        <Box sx={styles.circle}>
                            <Typography sx={styles.sana}>02</Typography>
                            <Typography sx={styles.oy}>MAY</Typography>
                            <Typography sx={styles.yil}>2023</Typography>
                        </Box>
                        <Typography sx={styles.bold}>New Friends With Books</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime perspiciatis amet et? Perferendis sed non accusamus aspernatur vitae.</Typography>
                    </Box>
                    <Box sx={styles.box1Blog}>
                        <img src={Img17} alt="..." style={{ width: '100%', height: '200px', zIndex: '600', position:'relative', objectFit: 'cover'}} />
                        <Box sx={styles.circle}>
                            <Typography sx={styles.sana}>02</Typography>
                            <Typography sx={styles.oy}>MAY</Typography>
                            <Typography sx={styles.yil}>2023</Typography>
                        </Box>
                        <Typography sx={styles.bold}>New Friends With Books</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime perspiciatis amet et? Perferendis sed non accusamus aspernatur vitae.</Typography>
                    </Box>
                    <Box sx={styles.box1Blog}>
                        <img src={Img18} alt="..." style={{ width: '100%', height: '200px', zIndex: '600', position:'relative', objectFit: 'cover' }} />
                        <Box sx={styles.circle}>
                            <Typography sx={styles.sana}>02</Typography>
                            <Typography sx={styles.oy}>MAY</Typography>
                            <Typography sx={styles.yil}>2023</Typography>
                        </Box>
                        <Typography sx={styles.bold}>New Friends With Books</Typography>
                        <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime perspiciatis amet et? Perferendis sed non accusamus aspernatur vitae.</Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Blog

const styles = {
    testi: {
        color: '#FF7B5D',
        fontSize: { md: '15px', xs: '18px' },
        textAlign: 'center',
        letterSpacing: 3,
        mt: { md: '205px', xs: '500px' }
    },
    kinds: {
        color: '#4C4C4C',
        textAlign: 'center',
        fontSize: { md: '40px', xs: '50px' },
        fontFamily: 'Monoscape'
    },
    boxBlog: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
        gap: '15px',
        m: { md: '3% 12% 0 12%', xs: '3%' },
    },
    circle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: {md:'-3%', xs:'-10%'},
        background:'#F5F4F0',
        width:'100px',
        height:'100px',
        borderRadius:'50%',
        textAlign:'center',
        zIndex: '1000', 
        position:'absolute',
        ml:{md:'8%', xs:'37%'}
    },
    sana:{
        fontSize:'20px',
        fontFamily:'Monoscape',
        color:'#95ADBD',
        fontWeight:'bolder'
    },
    oy:{
        fontSize:'17px',
        fontFamily:'Monoscape',
        color:'#222'  ,
        fontWeight:'bolder'
    },
    yil:{
        fontSize:'14px',
        fontFamily:'Monoscape',
        color:'#DCDBD8' 
    },
    bold:{
        fontSize:'18px',
        fontFamily:'Monoscape',
        color:'#222'   ,
        textAlign:'center',
        fontWeight:'bolder',
        mt:'15%'
    },
    lorem:{
        fontSize:'16px',
        fontFamily:'Monoscape',
        color:'#828282' ,
        textAlign:'center',
    }
}