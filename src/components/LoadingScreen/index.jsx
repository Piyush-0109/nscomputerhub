import CompanyLogo from "../../assets/new_ns_logo.png";
import "./loadingScreen.css";

export const LoadingScreen = () => {
    return (
        <div className="loadingScreenContainer">
            <img src={CompanyLogo} alt="NS COMPUTER HUB" style={{ height: '80px' }} />
            <div style={{ paddingTop: '1rem' }}>
                L o a d i n g . . .
            </div>
        </div>
    )
}