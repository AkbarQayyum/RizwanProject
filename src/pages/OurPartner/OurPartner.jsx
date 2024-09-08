import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import partnerimage from '../../assets/partner.jpg'
import cardsbig from '../../assets/cardbig.png'
const useStyle = makeStyles(() => {
  return {
    container: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(to bottom, #0c24c2, rgba(8,26,100,0.5)),url(${partnerimage})`,
      minHeight: '500px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundOrigin: 'border-box',
      backgroundPosition: 'center',
      gap: '20px',
      position: 'relative',
      overflow:'hidden'
    },
    bgimage: {
      position: 'absolute',
      width: '600px',
      bottom: '-100px',
      left: '-100px'
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '20px',
      zIndex: 1
    },
    cards: {
      background: 'white',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: '10px',
      width: '100%',
      maxWidth: '200px',
      minHeight: '250px'
    },
    btn:{
      width:'100%',
      padding:'10px 20px',
      "&:hover":{
        background:'#0c24c2',
        color:'white'
      }
    }
  }
})

const OurPartner = () => {
  const { container, bgimage, cardContainer, cards ,btn} = useStyle()
  const [data] = useState([
    {
      img: "https://laserbook.com/images/laser247logo.png",
      title: 'Laser247'
    },
    {
      img: "https://laserbook.com/images/99exchlogo.png",
      title: '99EXCH'
    },
    {
      img: "https://laserbook.com/images/11xplay.png",
      title: '11XPLAY'
    },
    {
      img: "https://laserbook.com/images/play247.png",
      title: 'PLAY247 WIN'
    },
    {
      img: "https://laserbook.com/images/lcplay247.png",
      title: 'LC PLAY 247'
    },
  ])
  return (
    <Box className={container} id={'partners'}>
      <Box>
        <Typography variant='h3' sx={{
          fontSize: { md: "65px", xs: "45px" },
          fontWeight: 700,
          color: "#FFFFFF"
        }}>
          OurPartners
        </Typography>
      </Box>
      <Box className={cardContainer}>
        {
          data?.map((d, i) => <Box className={cards}><img src={d?.img} alt={d?.img} style={{ width: '150px' }} /><Typography variant='h5' sx={{ fontWeight: 'bold' }}>{d?.title}</Typography><Box>
            <Button variant='outlined' className={btn}>PLAY NOW</Button>
            </Box></Box>)
        }
      </Box>
      <img src={cardsbig} alt='' className={bgimage} />
    </Box>
  )
}

export default OurPartner