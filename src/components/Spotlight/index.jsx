import "./spotlight.css"
import Area1Image from "../../assets/SpotlightImages/free-svg-illustrations.jpg";
import Area2Image from "../../assets/networkingSolution.jfif";
import Area3Image from "../../assets/dataRecovery.jfif";
import { Grid } from "@mui/material"
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Spotlight = () => {

	const spotlightSectionArray = [
		{
			imageSource: Area1Image,
			sectionHeader: "The power of purpose",
			sectionText: "We combine our technology, people, and broader networks to address society's greatest challenges. Since FY16, we've made a positive impact on more than 1 billion lives.",
			btnText: "Read Purpose Report",
			imageAlignment: "left"
		},
		{
			imageSource: Area2Image,
			sectionHeader: "More data. Better intelligence. Infinite possibilities.",
			sectionText: "Cisco AI Assistant accesses an unparalleled amount of data to help you work faster, safer, and smarter.",
			btnText: "Explore More with NS",
			imageAlignment: "right"
		},
		{
			imageSource: Area3Image,
			sectionHeader: "Tailored learning with Cisco U.",
			sectionText: "Discover recommended content just for you and your team. Explore skills assessments, learn-on-the-go tutorials, and more. Start for free.",
			btnText: "Let's Go with NS",
			imageAlignment: "left"
		}
	]

	return (
		<div>
			{
				spotlightSectionArray.map((item, index) => (
					item.imageAlignment == 'right' ?
						<Grid container spacing={4} className="spotlightWarapper"  >
							<Grid item xs={12} md={6} lg={6}>
								<Box>
									<Typography className="spotlightHeaderText">
										{item.sectionHeader}
									</Typography>
									<Typography sx={{ mt: 2 }} className="spotlightText">
										{item.sectionText}
									</Typography>
									<Button sx={{ mt: 2 }} variant="contained" className="sectionBtn">{item.btnText}</Button>
								</Box>
							</Grid>
							<Grid item xs={12} md={6} lg={6}>
								<div>
									<img className="spotlightImageWrapper" src={item.imageSource} />
								</div>
							</Grid>
						</Grid>
						:
						<Grid container spacing={4} className="spotlightWarapper"  >
							<Grid item xs={12} md={6} lg={6}>
								<div>
									<img className="spotlightImageWrapper" src={item.imageSource} />
								</div>
							</Grid>
							<Grid item xs={12} md={6} lg={6}>
								<Box>
									<Typography className="spotlightHeaderText">
										{item.sectionHeader}
									</Typography>
									<Typography sx={{ mt: 2 }} className="spotlightText">
										{item.sectionText}
									</Typography>
									<Button sx={{ mt: 2 }} variant="contained" className="sectionBtn">{item.btnText}</Button>
								</Box>
							</Grid>
						</Grid>
				))
			}
		</div >
	)
}