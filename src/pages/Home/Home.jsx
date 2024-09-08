import { Box, Container, Grid2, Typography } from "@mui/material"
import BG from "../../assets/bg.png";
import SIDEIMG from '../../assets/cardbig.png'
// import { makeStyles } from "@mui/styles";
import HomeStyle from "./HomeStyle";
import WhatsApp from "../What'sApp/WhatsApp";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(()=>{

  return {
    cardbgimage :{
      width:'90%',
      position:'absolute',
      bottom:'0%',
      right:'0px',
    },
    rightcornerimage:{
      width:'200px',
      position:'absolute',
      bottom:'-50px',
      left:'-5%',
    }
  }
})


const Home = () => {
  const {cardbgimage,rightcornerimage} = useStyle()
  return (
    <>
      <Box sx={{
        background: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"50%",
        position:'relative'

      }}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{zIndex:1}}>
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
            <Grid2 size={{ xs: 12, md: 6 }} sx={{position:'relative'}}>
              <Box  >
                <img src={SIDEIMG} className={`${cardbgimage} moveimage`}  alt="" />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
        <img src={SIDEIMG} className={`${rightcornerimage} moveimage`}  alt="" />
      </Box>
      <WhatsApp/>
    </>
  )
}

export default Home