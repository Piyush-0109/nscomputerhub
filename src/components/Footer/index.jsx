import "./footer.css"
import CompanyLogo from "../../assets/ns_logo.png";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { Container, Grid } from "@mui/material"


export const Footer = () => {
    const navigate = useNavigate();

    function handleLinkClick() {
        navigate("/")
    }
    return (
        <div className="">
            <div className="footerMain">
                <div className="footerContent">
                    <Container maxWidth={'lg'}>
                        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                            <Grid item xs={12} s={12} md={3} lg={3}>
                                <Box>
                                    <span className="companyNameText companyFooterText" onClick={() => handleLinkClick()}>NS COMPUTER HUB</span>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Astra Security Suite makes security simple and hassle-free for thousands of websites & businesses worldwide.
                                    </Typography>
                                </Box>
                                <div className="socialPadding">
                                    <a href="https://www.instagram.com/insideiim" target="_blank" rel="noreferrer"
                                    ><img
                                            src="https://altuni-images.s3.ap-south-1.amazonaws.com/images/IG.svg"
                                            className="social"
                                            height="50"
                                            alt="Altuni"
                                        /></a>
                                    <a href="https://www.facebook.com/insideiim" target="_blank" rel="noreferrer"
                                    ><img
                                            src="https://altuni-images.s3.ap-south-1.amazonaws.com/images/f.svg"
                                            className="social"
                                            height="50"
                                            alt="Altuni"
                                        /></a>
                                    <a
                                        href="https://www.linkedin.com/company/insideiim-com"
                                        target="_blank" rel="noreferrer"
                                    ><img
                                            src="https://altuni-images.s3.ap-south-1.amazonaws.com/images/LinkedIn.svg"
                                            className="social"
                                            height="50"
                                            alt="Altuni"
                                        /></a>
                                </div>
                            </Grid>

                            <Grid item xs={12} s={12} md={3} lg={3}>
                                <Box className="">
                                    <span className="companyNameText companyFooterText">Pentest</span>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Gaurav BHoo.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Features.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Web Pentest.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Mobile Pentest.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} s={12} md={3} lg={3}>
                            <Box className="">
                                    <span className="companyNameText companyFooterText">Company</span>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Gaurav BHoo.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Features.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Web Pentest.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Mobile Pentest.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} s={12} md={3} lg={3}>
                            <Box className="">
                                    <span className="companyNameText companyFooterText">Resource</span>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Gaurav BHoo.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Features.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Web Pentest.
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} className="companyFooterText">
                                        Mobile Pentest.
                                    </Typography>
                                </Box>
                            </Grid>


                        </Grid>
                    </Container>
                </div>
            </div>
            {/* <span>Copyright © {new Date().getFullYear()}, All Right Reserved NS COMPUTER HUB</span> */}
        </div>
    )
}