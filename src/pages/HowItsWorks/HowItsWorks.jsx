import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import howitwork from '../../assets/howitwork.jpg'

const useStyle = makeStyles(() => {
  return {
    container: {
      padding: '20px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to bottom, #0c24c2, rgba(8,26,100,0.5)),url(${howitwork})`,
      minHeight: '500px',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundOrigin: 'border-box',
      backgroundPosition: 'center',
      gap: '20px'
    },
    cardContainer: {
      width: '100%',
      
      padding: '10px',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-evenly',
      gap: '20px',
      color: 'white',
      flexWrap: 'wrap'
    },
    cards: {
      width: '250px',
      display: 'flex',
      gap: '20px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    StepBox: {
      height: '200px',
      width: '200px',
      display: 'flex',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      boxShadow: "rgba(8,26,100,0.5) 0px 7px 29px 0px",
    },
    btnContainer: {
      marginTop: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flexShrink: 'inherit',
      width:'100%'
    },
    btnsbox: {
     
      marginTop: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap:'20px'
      
    },
    btns:{
      width:'100%',
      padding:'20px 40px',
      color:'white',
      background:'#061470',
      textAlign:'center',
      textDecoration:'none',
      borderRadius:'10px',
      fontWeight:'bold',
      fontSize:'20px',
      transition:'0.2s',
      "&:hover":{
background:'black'
      }
    }
  }
})


const HowItsWorks = () => {
  const { container, cardContainer, cards, StepBox, btnContainer, btnsbox,btns } = useStyle()
  const [data] = useState([
    "Message us on our WhatsApp number", "Customer Satisfy guaranteed with all information", "Start depositing & withdrawal instantly", "Earn from your skills"
  ])
  return (
    <Box className={container} id={'working'}>
      <Typography variant='h3' sx={{
        fontSize: { md: "65px", xs: "45px" },
        fontWeight: 700,
        color: "#FFFFFF",
        marginTop: '50px'
      }}>
        How It Works
      </Typography>
      <Box className={cardContainer}>
        {data?.map((d, i) => <Box className={cards}>

          <Box className={StepBox}>
            <Typography variant='h3' sx={{ color: '#0c24c2', fontWeight: 'bold', textShadow: '3px 3px rgba(0,0,0,0.5)' }}>{i + 1}</Typography>
          </Box>
          <Typography variant='h6' sx={{
            fontSize: '18px',
            lineHeight: '26px'
          }}>{d}</Typography>
        </Box>)}
      </Box>
      <Box>
        <Typography variant='h3' sx={{
          textAlign: 'center',
          fontSize: '30px',
          lineHeight: '50px',
          color: '#fff',
          fontWeight: 'bold',
        }}>
          LaserBook is The Biggest Platform For Providing Online Sports Betting ID's.

        </Typography>
        <Typography sx={{
          textAlign: 'center',
          fontSize: '30px',
          lineHeight: '50px',
          color: '#fff',
        }}>Get Your Betting Id Now. Contact Us On WhatsApp.</Typography>
      </Box>
      <Box>
        <Typography sx={{
          textAlign: 'center',
          fontSize: '20px',
          lineHeight: '30px',
          color: '#fff'
        }}>For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services</Typography>
      </Box>
      <Box className={btnContainer}>
        <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '39px', color: '#fff' }}>
          Whatsapp us on
        </Typography>
        <Box className={btnsbox} sx={{width:{md:'50%',xs:'100%'}}}>
          <a href="https://wa.me/918505815041/?text=I need help" target='_blank' className={btns} >+44 7568 970054</a>
          <a href="https://wa.me/916232582686/?text=I need help" target='_blank' className={btns}> +44 7707 320655</a>
        </Box>
      </Box>
    </Box >
  )
}

export default HowItsWorks