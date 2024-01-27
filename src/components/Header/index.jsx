import { headerLinksArray } from "../../constants";
import CompanyLogo from "../../assets/logo.jfif";
import "./header.css";

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="companyLogoWrapper">
        <img src={CompanyLogo} alt="NS COMPUTER HUB" style={{ height: 40 }} />
        <span className="companyNameText">NS COMPUTER HUB</span>
      </div>
      <div className="headerListWrapper">
        {
          headerLinksArray.map((item, index) => (
            <span key={index} className="headerListItem">{item}</span>
          ))
        }
      </div>
    </div>
  )
}