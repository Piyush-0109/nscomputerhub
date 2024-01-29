import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Grid } from "@mui/material"
import InstagramLogo from "../../assets/FooterImages/Instagram-Icon-01.svg"
import FacebookLogo from "../../assets/FooterImages/Facebook-01.svg"
import LinkedInLogo from "../../assets/FooterImages/Linkedin-02.svg"
import "./footer.css"

export const Footer = () => {
	const navigate = useNavigate();

	const socialMediaImageArray = [
		{
			socialLink: "https://www.instagram.com/ns_computer_hub?igsh=MXJnczk5Zm1sd3d3aQ==",
			imageSource: InstagramLogo,
			imageText: "Instagram"
		},
		{
			socialLink: "https://www.facebook.com/people/NS-Computer-HUB/100066542637046/",
			imageSource: FacebookLogo,
			imageText: "Facebook"
		},
		{
			socialLink: "https://www.linkedin.com/in/ns-computer-hub-0292492aa",
			imageSource: LinkedInLogo,
			imageText: "Linkedin"
		}
	]

	return (
		<div className="footerContent">
			<Grid container spacing={4}>
				<Grid item xs={12} md={3} lg={3}>
					<Box>
						<span className="companyNameText companyFooterText" onClick={() => navigate("/")}>NS COMPUTER HUB</span>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Thanks to our Clients, Vendors and Well-wishers for being with us in this journey and we are sure that they will be with us forever.
						</Typography>
					</Box>
					<div className="socialPadding">
						{socialMediaImageArray.map((item, index) => (
							<a href={item.socialLink} target="_blank" rel="noreferrer" key={index}>
								<img
									src={item.imageSource}
									className="social"
									height="50"
									alt={item.imageText}
								/>
							</a>
						))
						}
					</div>
				</Grid>
				<Grid item xs={12} md={3} lg={3}>
					<Box>
						<span className="companyNameText companyFooterText">Company</span>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Services.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							About.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Contact.
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={3} lg={3}>
					<Box>
						<span className="companyNameText companyFooterText">Useful Links</span>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							AMC Link.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Software & Hardware Solutions.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Data Recovery Solutions.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Networking Solutions.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Apple Product Service.
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={3} lg={3}>
					<Box>
						<span className="companyNameText companyFooterText">Contact Us</span>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Phone Number
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Mail.
						</Typography>
						<Typography sx={{ mt: 2 }} className="companyFooterText">
							Address.
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<div className="footerDivider" />
			<div className="footerCopyrightTextWrapper">
				<span className="footerCopyrightText">Copyright © {new Date().getFullYear()}, All Right Reserved NS COMPUTER HUB</span>
			</div>
		</div>
	)
}