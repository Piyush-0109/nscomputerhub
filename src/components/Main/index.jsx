import { Container, Grid } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import BannerImage from "../../assets/banner.png"
import SoftwareHardwareSolutonImage from "../../assets/software-hardware-solution-image.jfif";
import AppleProductSolutionsImage from "../../assets/appleSolution.jfif";
import CustomPcBuildImage from "../../assets/customPcBuild.jfif";
import SurvillenceImage from "../../assets/cctv.jfif";
import NetworkingSolutionsImage from "../../assets/networkingSolution.jfif";
import DataRecoveryImage from "../../assets/dataRecovery.jfif";
import { Carousel } from "../Carousel";
import "./main.css"

export const Main = () => {
  const serviceCardArray = [
    {
      title: "Software & Hardware Solutions",
      imageSource: SoftwareHardwareSolutonImage,
      description: "We will come right to your home or business and repair your computer on the spot."
    },
    {
      title: "Apple Product Services",
      imageSource: AppleProductSolutionsImage,
      description: "We Provide solutions to build IT infrastructure for your office, warehouse, retail and all kind of business operations."
    },
    {
      title: "Custom PC Build",
      imageSource: CustomPcBuildImage,
      description: "We Provide solutions to build IT infrastructure for your office, warehouse, retail and all kind of business operations."
    },
    {
      title: "Survillence Solutions",
      imageSource: SurvillenceImage,
      description: "We provide the best CCTV products and services of CP Plus CCTV cameras and other brands to the marketplace."
    },
    {
      title: "Networking Solutions",
      imageSource: NetworkingSolutionsImage,
      description: "We provide best network solutions to bulid IT infrastructure for your office, warehouse, retail and all kind of business operations."
    },
    {
      title: "Data Recovery & Backup Solutions",
      imageSource: DataRecoveryImage,
      description: "We Provide solutions to build IT infrastructure for your office, warehouse, retail and all kind of business operations."
    }
  ]

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
            serviceCardArray.map((item, index) => (
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
        </Grid>
      </Container>
    </div >
  )
}