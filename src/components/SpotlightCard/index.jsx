import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { CustomButton } from "./customButtonStyles";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./spotlightcard.css";

export const SpotLightCard = ({ spotLightCardProps }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { imageAlignment, imageSource, cardHeader, cardDescription, cardButtonText } = spotLightCardProps;

  return (
    <>
      {
        (imageAlignment === "left" || !matches) &&
        <Grid item xs={12} md={6} lg={6}>
          <img src={imageSource} className="spotLightCardBannerImage" />
        </Grid>
      }
      <Grid item xs={12} md={6} lg={6}>
        <div className="spotLightCardDeatilsWrapper">
          <span className="spotLightCardTitle">{cardHeader}</span>
          <span className="spotLightCardSubTitle">{cardDescription}</span>
          <CustomButton endIcon={<EastIcon fontSize="large" className="readMoreIcon" />}>
            {cardButtonText}
          </CustomButton>
        </div>
      </Grid>
      {
        (imageAlignment !== "left" && matches) &&
        <Grid item xs={12} md={6} lg={6}>
          <img src={imageSource} className="spotLightCardBannerImage" />
        </Grid>
      }
    </>
  )
}