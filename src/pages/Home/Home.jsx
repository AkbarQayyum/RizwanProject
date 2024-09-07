import { Box, Container, Grid2, Typography } from "@mui/material"
import BG from "../../assets/bg.png";
import SIDEIMG from '../../assets/sideImg.png'
// import { makeStyles } from "@mui/styles";
import HomeStyle from "./HomeStyle";
import WhatsApp from "../What'sApp/WhatsApp";

// const useStyles = makeStyles(() => ({
//   textone: {
//     marginTop:"12rem",
//     background:"#FFFFFF",
//     width:"210px",
//     textAlign:"center",
//     color:"#061470",
//     fontSize:"16px",
//     fontWeight:700,
//     lineHeight:"19.5px"
//   },
  
// }));

const Home = () => {
  // const classes = useStyles()
  return (
    <>
      <Box sx={{
        background: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"50%"

      }}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{marginTop:{md:"14rem", xs:"12rem"}}}>
              <span style={HomeStyle.textone}>
                India’s #1 Exchange
              </span>
              </Box>
              <Typography sx={HomeStyle.textTwo}>
              GET YOUR ONLINE ID WITH THE BIGGEST
              </Typography>
              <Typography sx={HomeStyle.mainheading}>
              SAFARIBET365
              </Typography>
              <Typography sx={HomeStyle.textthree}>
              NO. 1 PLATFORM FOR PROVIDING 
              ONLINE SPORTS ID
              </Typography>
              <Box sx={{margin:"5rem 0",}}>
              <a href="https://wa.link/laserbook" className="hoverstyle" target="_blank" style={HomeStyle.atag}>Get Your Demo ID Now</a>
              </Box>

            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{marginTop:{md:"18rem", xs:"1rem"}}}>
                <img src={SIDEIMG} style={{width:"100%"}} alt="" />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <WhatsApp/>
    </>
  )
}

export default Home