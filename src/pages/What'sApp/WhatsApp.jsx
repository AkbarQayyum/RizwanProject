import { Box, Container, Grid2, Typography } from "@mui/material"
import WhatsAppStyle from "./WhatsAppStyle"

const WhatsApp = () => {
  return (
    <>
    <Box sx={{
        background:"#000",
        padding:"25px 15px"
    }}>
        <Container maxWidth="100%">
            <Grid2 container sx={{display:"flex", alignItems:"center"}}>
                <Grid2 size={{xs:12, md:6}}>
                <Typography sx={{
                            fontSize:"30px",
                            fontWeight:700,
                            lineHeight:"36.57px",
                            color:"#FFFFFF",

                        }}>
                        Contact Us  On Whatsapp
                        </Typography>
                </Grid2>
                <Grid2 size={{xs:12, md:6}}>
                <Box sx={WhatsAppStyle.whatsappbtn}>
              <a href="https://wa.me/916232582686/?text=I need help" className="whatsbtn" target="_blank" style={WhatsAppStyle.atag}>+44 7707 320655</a>
              <a href="https://wa.me/918505815041/?text=I need help" className="whatsbtn" target="_blank" style={WhatsAppStyle.atag}>+44 7568 970054</a>
              
                </Box>
                </Grid2>
                
            </Grid2>
        </Container>
    </Box>
    </>
  )
}

export default WhatsApp