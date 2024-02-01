import Grid from '@mui/material/Grid';
import EastIcon from '@mui/icons-material/East';
import "./serviceCard.css"

export const ServiceCard = ({ serviceCardProps, index }) => {
  const { imageSource, title, description } = serviceCardProps
  return (
    <Grid item xs={12} md={4} key={index}>
      <div className="serviceCardContainer">
        <div className="serviceCardWrapper">
          <img className="serviceCardImage" src={imageSource} alt={title} />
        </div>
        <div className="serviceCardDescriptionWrapper">
          <div className="serviceCardDescriptionTitleWrapper" >
            <span className="serviceCardDescriptionTitle">{title}</span>
          </div>
          <div className="serviceCardSubtitle">
            <span>{description}</span>
          </div>
        </div>
        <div className="serviceCardButtonContainer">
          <div className="serviceCardButtonWrapper">
            <span className="readMoreText">
              Read More
            </span>
            <EastIcon fontSize="small" className="readMoreIcon" />
          </div>
        </div>
      </div>
    </Grid>
  )
}