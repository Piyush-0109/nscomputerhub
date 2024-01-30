import SoftwareHardwareSolutonImage from "../assets/software-hardware-solution-image.jfif";
import AppleProductSolutionsImage from "../assets/appleSolution.jfif";
import CustomPcBuildImage from "../assets/customPcBuild.jfif";
import SurvillenceImage from "../assets/cctv.jfif";
import NetworkingSolutionsImage from "../assets/networkingSolution.jfif";
import DataRecoveryImage from "../assets/dataRecovery.jfif";
import AMCSolutionImage from "../assets/SpotlightImages/AMC_solutions.svg";
import Area1Image from "../assets/SpotlightImages/free-svg-illustrations.jpg";

export const headerLinksArray = ["Products and Services", "Solutions", "About Us", "Contact"]

export const serviceCardArray = [
    "Software/Hardware Solutions",
    "Apple Product Services",
    "Custom PC Build",
    "CCTV",
    "Networking Solutions",
    "Data Recovery and Backup Solutions"
]

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
        title: "Data Recovery & Backup Solutions",
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