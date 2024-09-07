import { Box, Container, Grid2, Typography } from '@mui/material'
import BG from '../../assets/bg1.jpg'
import BATSMAN from '../../assets/batsman.png'
import BettingStyle from './BettingStyle'
// import CARD from '../../assets/cardbig.png'
const Betting = () => {
  return (
    <>
      <Box sx={{
        background: `url(${BG}) no-repeat center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: "1rem 15px"

      }}>
        <Container maxWidth="100%">
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 5 }} mt={6}>
              <Box>
                <Box component={'img'} src={BATSMAN} sx={BettingStyle.batsmanimg} />
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }} sx={{zIndex:1, marginTop:{md:"5rem", xs:"0"}}} >
              <Box>
                <Typography component={'h4'} sx={BettingStyle.laserbook}>
                  We are <span className='laserbookspan'>SAFARIBET365</span>
                </Typography>
                <Typography component={'h1'} sx={BettingStyle.h1tag}>
                  THE BIGGEST PLATFORM FOR PROVIDING ONLINE SPORTS BETTING ID’s
                </Typography>
                <Typography sx={BettingStyle.text1}>
                  Welcome to LaserBook, We are India’s No 1 Exchange and the First That Provide 24*7 Withdrawal Facility. We offer you a genuinely unique sports betting experience. Besides, We also offer global liquidity, best industry pricing with a single click.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, flexDirection:{md:"row", xs:"column"} }}>
                <a href="https://wa.link/laserbook" className="whatsbtn" target="_blank" style={BettingStyle.bettingwhatsappbtn}>Whatsapp us on - +44 7707 320655</a>
                <a href="https://wa.link/laserbook" className="whatsbtn" target="_blank" style={BettingStyle.bettingwhatsappbtn}>Get Your Demo ID Now</a>

              </Box>
            </Grid2>
            {/* <Box sx={{position:"relative"}}> */}
            <Box className='cardimg'>
              {/* <Box component={'img'} src={CARD} sx={{width:"100%", maxWidth:"550px", overflow:"hidden", transform:"translate(0,0)"}} /> */}
            {/* </Box>  */}
            </Box>
          </Grid2>
        </Container>
      </Box>
    </>
  )
}

export default Betting