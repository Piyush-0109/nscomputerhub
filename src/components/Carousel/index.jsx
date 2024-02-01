import { carouselDataArray } from "./carouselConstants";
import "./carousel.css";

export const Carousel = () => {
  return (
    <div className="scroll">
      <div className="m-scroll">
        {carouselDataArray.map((item, index) => (
          <div className="scrollerImageContainer" key={index}>
            <img className="scrollerImageWrapper" src={item.source} alt={item.title} />
          </div>
        ))
        }
      </div>
    </div>
  )
}