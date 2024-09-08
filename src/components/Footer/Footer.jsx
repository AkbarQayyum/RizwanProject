import { Box, Container, Typography } from '@mui/material'
import Logo from "../../assets/Logo7.png";
import FooterStyle from './FooterStyle';
import WhatsAppStyle from '../../pages/What\'sApp/WhatsAppStyle';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <Box sx={{ background: "#040C41", padding: "3rem 0" }} id={'footer'}>
                <Container>
                    <Box component={'img'} src={Logo} sx={{ width: "30%" }} />


                    <Typography component={'h3'} sx={FooterStyle.text1}>
                        Get In Touch With LaserBook Customer Care
                    </Typography>
                    <Typography sx={FooterStyle.text2}>
                        For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.
                    </Typography>
                    <Typography sx={FooterStyle.whtsappus}>
                        Whatsapp us on
                    </Typography>
                    <Box sx={FooterStyle.wthsbtn}>
                        <a href="https://wa.me/916232582686/?text=I need help" className="whatsbtn" target="_blank" style={WhatsAppStyle.atag}>+44 7707 320655</a>
                        <a href="https://wa.me/918505815041/?text=I need help" className="whatsbtn" target="_blank" style={WhatsAppStyle.atag}>+44 7568 970054</a>

                    </Box>
                    <Typography component={'h3'} sx={FooterStyle.h3}>
                        With Our Step-By-Step Guide For Beginners
                    </Typography>
                    <Typography sx={FooterStyle.p}>
                        We Provide 24/7 Service For Our Customers.
                    </Typography>

                    <Box sx={{ marginTop: "2rem", textAlign: { md: "left", xs: "center" } }}>
                        <a href="https://wa.me/916232582686/?text=I need help" className="whatsbtn" target="_blank" style={WhatsAppStyle.atag}>Get Started Playing</a>
                    </Box>

                    <Box mt={7} sx={{ textAlign: { md: "left", xs: "center" } }}>
                        <a href="#" className='footerlink' target="_blank" rel="noopener noreferrer">Home</a>
                        <Link activeClass="active"
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">About Us</Link>
                        <Link activeClass="active"
                            to="partners"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">Our Partners</Link>
                        <Link activeClass="active"
                            to="working"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">How It Works</Link>
                        <Link activeClass="active"
                            to="celebs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">Celebs Love Us</Link>
                        <Link activeClass="active"
                            to="whysafari"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">Why LaserBook</Link>
                        <Link activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className='footerlink' target="_blank" rel="noopener noreferrer">Contact Us</Link>
                        <a href="#" className='footerlink' rel="noopener noreferrer">Blogs</a>
                        <a href="#" className='footerlink' rel="noopener noreferrer">Privacy Policy</a>
                        <a href="#" className='footerlink' rel="noopener noreferrer">Terms & Conditions</a>
                    </Box>

                    <Box sx={{ marginTop: "1rem", display: "flex", gap: 4 }}>
                        <a href="https://www.facebook.com/share/VbRjt2hhR1zmzU8W/?mibextid=qi2Omg" className='footersociallinks' target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/safaribet365?igsh=cjhvNDlzcTJ5aGxq" className='footersociallinks' target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/916232582686/?text=I need help" className='footersociallinks' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer