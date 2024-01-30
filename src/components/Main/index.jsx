import { Container, Grid } from "@mui/material"
import BannerImage from "../../assets/banner.png"
import { Carousel } from "../Carousel";
import { SpotLightCard } from "../SpotlightCard";
import { serviceCardDataArray, spotLightCardDataArray } from "../../constants";
import "./main.css"
import { ServiceCard } from "../ServiceCard";

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
              <ServiceCard serviceCardProps={item} key={index} />
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