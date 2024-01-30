import { Container, Grid } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import BannerImage from "../../assets/banner.png"
import { Carousel } from "../Carousel";
import { SpotLightCard } from "../SpotlightCard";
import { spotLightCardDataArray } from "../SpotlightCard/spotLightCardConstans";
import { serviceCardDataArray } from "../../constants";
import "./main.css"

export const Main = () => {

  return (
    <div>
      <div className="bannerImageWrapper">
        <img className="bannerImage" src={BannerImage} alt="Banner" />
        <div className="bannerImageText">
          Where <br />
          Service Is <br />
          <div className="typingEffect">
            A Way Of Life...
          </div>
        </div>
      </div>
      <Container maxWidth={'lg'}>
        <div className="ourServiceWrapper">
          <h1 className="ourServiceText">Our Services</h1>
        </div>
        <Grid container spacing={5}>
          {
            serviceCardDataArray.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <div className="serviceCardContainer">
                  <div className="serviceCardWrapper">
                    <img className="serviceCardImage" src={item.imageSource} alt={item.title} />
                  </div>
                  <div className="serviceCardDescriptionWrapper">
                    <div style={{ height: '50px' }}>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="serviceCardSubtitle">
                      <span>{item.description}</span>
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
            ))
          }
          <Grid item xs={12}>
            <Carousel />
          </Grid>
          {
            spotLightCardDataArray.map((item, index) => (
              <SpotLightCard spotLightCardProps={item} key={index} />
            ))
          }
        </Grid>
      </Container>
    </div >
  )
}