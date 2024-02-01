import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BannerImage from "../../assets/banner.png";
import { Carousel } from "../Carousel";
import { ServiceCard } from "../ServiceCard";
import { SpotLightCard } from "../SpotlightCard";
import { serviceCardDataArray, spotLightCardDataArray } from "../../constants";
import './MainPage.css';

function MainPage() {
  return (
    <>
      <div className="bannerImage" style={{ backgroundImage: `url(${BannerImage})` }} >
        <div className="bannerImageTextWrapper">
          <h1 className="bannerImageTextHeader">
            Can’t <br />
            Ctrl + Alt + Delete<br />
            Your Problems?
            <div className="typingEffect">
              We Can Help . . .
            </div>
          </h1>
        </div>
      </div>
      <Container maxWidth={'lg'}>
        <div className="ourServiceWrapper">
          <span className="ourServiceText">Our Services</span>
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
    </>
  );
}

export default MainPage;
