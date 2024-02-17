import SoftwareHardwareSolutonImage from "../assets/software-hardware-solution-image.jfif";
import AppleProductSolutionsImage from "../assets/appleSolution.jfif";
import CustomPcBuildImage from "../assets/customPcBuild.jfif";
import SurvillenceImage from "../assets/cctv.jfif";
import NetworkingSolutionsImage from "../assets/networkingSolution.jfif";
import DataRecoveryImage from "../assets/dataRecovery.jfif";
import AMCSolutionImage from "../assets/SpotlightImages/AMC_solutions.svg";
import Area1Image from "../assets/SpotlightImages/free-svg-illustrations.jpg";
import Call from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const headerLinksArray = ["Products and Services", "Solutions", "About Us", "Contact"]

export const serviceCardDataArray = [
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
        title: "Data Recovery Solutions",
        imageSource: DataRecoveryImage,
        description: "We Provide solutions to build IT infrastructure for your office, warehouse, retail and all kind of business operations."
    }
]

export const spotLightCardDataArray = [
    {
        imageSource: AMCSolutionImage,
        cardHeader: "AMC Solutions",
        cardDescription: "We combine our technology, people, and broader networks to address society's greatest challenges. Since FY16, we've made a positive impact on more than 1 billion lives.",
        cardButtonText: "Learn More",
        imageAlignment: "left"
    },
    {
        imageSource: Area1Image,
        cardHeader: "AMC Solutions",
        cardDescription: "We combine our technology, people, and broader networks to address society's greatest challenges. Since FY16, we've made a positive impact on more than 1 billion lives.",
        cardButtonText: "Learn More",
        imageAlignment: "right"
    }
]

export const footerUsefulLinksArray = [
    "AMC Link",
    "Software & Hardware Solutions",
    "Data Recovery Solutions",
    "Networking Solutions",
    "Apple Product Service"
]

export const footerContactUsArray = [
    {
        imageSource: <Call />,
        title: '+917066806255',
        hrefSource: 'tel:+917066806255'
    },
    {
        imageSource: <EmailIcon />,
        title: 'nscomputerhub@gmail.com',
        hrefSource: '/'
    },
    {
        imageSource: <LocationOnIcon />,
        title: 'OFFICE NUMBER 5, 1ST FLOOR, 1481, Sadashiv Peth Rd, opposite TILAK SMARAK MANDIR, Perugate, Sadashiv Peth, Pune, Maharashtra 411030.',
        hrefSource: 'https://maps.app.goo.gl/8Jo81CoqsNC9QxbUA'
    }
]