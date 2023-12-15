import { Box, Typography } from "@mui/material"
import React from "react";
import Img1 from "../images/book-1.jpg.webp";
import Img2 from "../images/book-2.jpg.webp";
import Img3 from "../images/book-3.jpg.webp";
import Img4 from "../images/book-4.jpg.webp";
import Img5 from "../images/book-5.jpg.webp";
import Img6 from "../images/book-6.jpg.webp";

function Books() {
    return (
        <React.Fragment>
            <Box>
                <Typography sx={styles.books}>BOOKS</Typography>
                <Typography sx={styles.new}>NEW RELEASE</Typography>
                <Box sx={styles.boxBooks}>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img1})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>You Are Your Only Limit</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img2})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>101 Essays that will change the way you think</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img3})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>Your soul is a river</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img4})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>All the letters I should have sent</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img5})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>Happy</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.BooksBox}>
                        <Box sx={{
                            background: `url(${Img6})`,
                            width: { md: '50%', xs: '100%' }, height: '250px',
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundSize: "cover",
                            marginTop: 0,
                            backgroundPosition: { xs: 'center' },
                            justifyContent: 'center',
                        }}></Box>
                        <Box sx={styles.BookWork}>
                            <Typography sx={styles.price}>$12.00</Typography>
                            <Typography sx={styles.only}>Milk and Honey</Typography>
                            <Typography sx={styles.author}>By John Nathan Muller</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Books

const styles = {
    books: {
        color: '#FF7B5D',
        fontSize: { md: '15px', xs: '18px' },
        letterSpacing: 3,
        mt: { md: 0, xs: '20%' },
        textAlign: 'center'
    },
    new: {
        fontSize: '25px',
        color: '#7A7A78',
        textAlign: 'center'
    },
    boxBooks: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
        gap: '15px',
        m: { md: '5%', xs: '3%' }
    },
    BooksBox: {
        display: 'flex',
        flexDirection: { md: 'row', sm: 'column', xs: 'column' },
        justifyContent: 'center',
        width: '100%',
    },
    BookWork: {
        background: '#F5F4F0',
        width: {md:'50%', xs:'100%'}
    },
    price: {
        color: '#FF7B5D',
        fontSize: '18px',
        mt: '3%',
        textAlign: 'left',
        ml: '5%'
    },
    only: {
        color: '#222',
        fontSize: '20px',
        mt: '4%',
        textAlign: 'left',
        fontWeight: 'bolder',
        ml: '5%',
        fontFamily: 'sans-serif'
    },
    author: {
        color: '#7A7A78',
        fontSize: '14px',
        mt: '5%',
        textAlign: 'left',
        ml: '5%'
    }
}