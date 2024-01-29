import AcerLogo from "../../assets/carousalImages/Acer-01.svg"
import AmdLogo from "../../assets/carousalImages/AMD-01.svg"
import AsusLogo from "../../assets/carousalImages/ASUS-01.svg"
import AppleLogo from "../../assets/carousalImages/Apple-09.svg"
import DellLogo from "../../assets/carousalImages/Dell-01.svg"
import GigabyteLogo from "../../assets/carousalImages/Gigabyte-01.svg"
import HpLogo from "../../assets/carousalImages/HP-01.svg"
import IntelLogo from "../../assets/carousalImages/Intel-01.svg"
import KingstonLogo from "../../assets/carousalImages/Kingston-Technology-01.svg"
import LenovoLogo from "../../assets/carousalImages/Lenovo-01.svg"
import LogitechLogo from "../../assets/carousalImages/Logitech-01.svg"
import MicrosoftLogo from "../../assets/carousalImages/Microsoft-01.svg"
import NvidiaLogo from "../../assets/carousalImages/Nvidia-01.svg"
import SandiskLogo from "../../assets/carousalImages/SanDisk-01.svg"
import SeagateLogo from "../../assets/carousalImages/Seagate-01.svg"
import ViewSonicLogo from "../../assets/carousalImages/Viewsonic-01.svg"
import WdLogo from "../../assets/carousalImages/Western-Digital-01.svg"
import "./carousel.css"

export const Carousel = () => {
  const carousalImageArray = [
    {
      title: 'Acer',
      source: AcerLogo
    },
    {
      title: 'Amd',
      source: AmdLogo
    },
    {
      title: 'Apple',
      source: AppleLogo
    },
    {
      title: 'Asus',
      source: AsusLogo
    },
    {
      title: 'Dell',
      source: DellLogo
    },
    {
      title: 'Gigabyte',
      source: GigabyteLogo
    },
    {
      title: 'Hp',
      source: HpLogo
    },
    {
      title: 'Intel',
      source: IntelLogo
    },
    {
      title: 'Kingston',
      source: KingstonLogo
    },
    {
      title: 'Lenevo',
      source: LenovoLogo
    },
    {
      title: 'Logitech',
      source: LogitechLogo
    },
    {
      title: 'Microsoft',
      source: MicrosoftLogo
    },
    {
      title: 'Nvidia',
      source: NvidiaLogo
    },
    {
      title: 'Sandisk',
      source: SandiskLogo
    },
    {
      title: 'Seagate',
      source: SeagateLogo
    },
    {
      title: 'ViewSonic',
      source: ViewSonicLogo
    },
    {
      title: 'Wd',
      source: WdLogo
    }
  ]

  return (
    <div className="scroll">
      <div className="m-scroll">
        {carousalImageArray.map((item, index) => (
          <div className="scrollerImageContainer" key={index}>
            <img className="scrollerImageWrapper" src={item.source} alt={item.title} />
          </div>
        ))
        }
      </div>
    </div>
  )
}