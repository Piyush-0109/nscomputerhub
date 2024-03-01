import { Container } from "@mui/material";
import AboutUsImage from "../../assets/AboutImages/why_choose_us.svg"
import "./about.css";

const About = () => {

    return (
        <div>
            <Container maxWidth={'xl'}>
                <div className="ourServiceWrapper">
                    <span className="ourServiceText">Why choose us?</span>
                </div>
                {/* <div className="aboutUsBackgroundContainer" style={{ backgroundImage: `url(${AboutUsImage})` }}> */}
                <div className="whyChooseUsWrapper">
                    <span className="whyChooseUsText">
                        <li>
                            NS Computer Hub in Pune India since 2018 founded by Gaurav Nandkishor Dhoot is your <i>"One Stop For All IT Solutions"</i>. We are committed to bring you the best deals in refurbished Desktops, laptops and notebook computers.
                        </li>
                        <br />
                        <li>
                            We stock the most reliable business grade Desktops, notebooks of manufacturers including Dell, IBM, Toshiba, Compaq, and Hewlett Packard (HP) We also offer quantity volume discount and wholesale prices to resellers and companies in need of bulk purchase and volume order.
                            On the part of Customer satisfaction, NS Computer Hub first and foremost important issue is customer service, most of our clients are repeat customers therefore customer satisfaction is at great importance to us, all products on sale carry our quality warranty and every pc product is individually tested three times to insure its full functionality.
                        </li>
                        <br />
                        <li>
                            NS Computer Hub is an asset recovery solution provider, managing excess or end-of-life IT assets. Our expertise of process engineering and remarketing directly translates into recovery of IT asset value for our clients’ businesses. Our company do Sales and Service of Used computer Hardware. Our company has a strong database of the corporate which are associated with us from the last decade. With the good reputation in the market we do the business with full of integrity and commitments.
                        </li>
                    </span>
                </div>
                {/* </div> */}
                <div className="ourServiceWrapper">
                    <span className="ourServiceText">Locate us</span>
                </div>
                <iframe
                    title="google-maps-location" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4503678597025!2d73.84687707523656!3d18.508539382582626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15a1c1b5211%3A0xb766cf8f496c68c8!2sNS%20COMPUTER%20HUB!5e0!3m2!1sen!2sin!4v1706781891229!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Container>
        </div>
    )
}

export default About;