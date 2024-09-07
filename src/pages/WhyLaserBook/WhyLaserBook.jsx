import { Box, Container, Grid2, Typography } from '@mui/material'
import BG from '../../assets/bg5.jpg'
// import IMG from '../../assets/onlineId.png'
import WhyLaserBookStyle from './WhyLaserBookStyle'
import WhyLaserBookArray from './LaserBookArary'
const WhyLaserBook = () => {
    return (
        <>
            <Box sx={{
                background: `url(${BG}) no-repeat center center`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                padding: "3rem 15px"
            }}>
                <Container>
                    <Typography component={'h2'} sx={WhyLaserBookStyle.mainheading}>
                        Why SAFARIBET365
                    </Typography>
                    <Grid2 container spacing={3}>
                        {WhyLaserBookArray.map((item, ind) => {
                            return (
                                <>
                                    <Grid2 key={ind} size={{ md: 4, xs: 12 }}>
                                        <Box sx={WhyLaserBookStyle.mainbox}>
                                            <Box sx={WhyLaserBookStyle.flex}>
                                                <Box sx={{ width: "300px" }}>
                                                    <Box component={'img'} src={item.img} sx={{ width: "100%" }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={WhyLaserBookStyle.h2tag}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography sx={WhyLaserBookStyle.ptag}>
                                                        {item.para}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid2>
                                </>
                            )
                        })}
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}

export default WhyLaserBook