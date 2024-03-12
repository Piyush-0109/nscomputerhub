import { useNavigate } from 'react-router-dom';
import { Link, Typography } from "@mui/material";
import { Grid } from "@mui/material"
import { footerContactUsArray, footerUsefulLinksArray } from '../../constants';
import CompanyLogo from "../../assets/new_ns_logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./footer.css"

export const Footer = () => {
  const navigate = useNavigate();

  const footerSocialMediaArray = [
    {
      socialLink: "https://www.instagram.com/ns_computer_hub?igsh=MXJnczk5Zm1sd3d3aQ==",
      imageSource: <InstagramIcon fontSize='large' className='socialMediaIcon instagramIcon' />,
      imageText: "Instagram"
    },
    {
      socialLink: "https://www.facebook.com/people/NS-Computer-HUB/100066542637046/",
      imageSource: <FacebookIcon fontSize='large' className='socialMediaIcon facebookIcon' />,
      imageText: "Facebook"
    },
    {
      socialLink: "https://www.linkedin.com/in/ns-computer-hub-0292492aa",
      imageSource: <LinkedInIcon fontSize='large' className='socialMediaIcon linkedinIcon' />,
      imageText: "Linkedin"
    },
    {
      socialLink: "https://api.whatsapp.com/send?phone=+919130567246",
      imageSource: <WhatsAppIcon fontSize='large' className='socialMediaIcon whatsappIcon' />,
      imageText: "WhatsApp"
    }
  ]

  return (
    <div className="footerContent">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <>
            <div style={{ display: 'flex', alignContent: "center", alignItems: 'center' }}>
              <img src={CompanyLogo} alt="NS COMPUTER HUB" style={{ height: '60px' }} />
              <span className="companyFooterText" style={{ marginLeft: '0.2rem' }} onClick={() => navigate("/")}>NS COMPUTER HUB</span>
            </div>
            <Typography sx={{ mt: 2 }} className="companyFooterText">
              Thanks to our Clients, Vendors and Well-wishers for being with us in this journey and we are sure that they will be with us forever.
            </Typography>
          </>
          <div className="socialPadding">
            {footerSocialMediaArray.map((item, index) => (
              <Link
                key={index}
                sx={{ color: 'white', cursor: 'pointer', padding: "0px 2rem 0px 0px" }}
                underline='none'
                className="companyFooterText"
                href={item.socialLink}
                target="_blank"
                rel="noopener"
              >
                {item.imageSource}
              </Link>
            ))
            }
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <>
            <span className="companyFooterText">Company</span>
            <Typography sx={{ mt: 2 }} className="companyFooterText">
              Services.
            </Typography>
            <Typography sx={{ mt: 2 }} className="companyFooterText">
              About.
            </Typography>
            <Typography sx={{ mt: 2 }} className="companyFooterText">
              Contact.
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} md={3}>
          <>
            <span className="companyFooterText">Useful Links</span>
            {
              footerUsefulLinksArray.map((item, index) => (
                <Typography sx={{ mt: 2 }} className="companyFooterText" key={index}>
                  {item}
                </Typography>
              ))
            }
          </>
        </Grid>
        <Grid item xs={12} md={3}>
          <>
            <span className="companyFooterText">Contact Us</span>
            {footerContactUsArray.map((item, index) => (
              <div className="contactUsFooter" key={index}>
                {item.imageSource}
                <Link
                  sx={{ ml: "1rem", color: 'white', cursor: 'pointer' }}
                  underline='hover'
                  className="companyFooterText"
                  href={item.hrefSource}
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    if (item.title === "dhootgaurav60@gmail.com") {
                      e.preventDefault()
                    }
                  }}
                >
                  {item.title}
                </Link>
              </div>
            ))
            }
          </>
        </Grid>
      </Grid>
      <div className="footerDivider" />
      <div className="footerCopyrightTextWrapper">
        <span className="footerCopyrightText">Copyright © {new Date().getFullYear()}, All Right Reserved NS COMPUTER HUB, Pune</span>
      </div>
    </div>
  )
}