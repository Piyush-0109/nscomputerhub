import { useLocation } from "react-router-dom";
import DrawerAppBar from "../Appbar"
import { Footer } from "../Footer"

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="App">
            <DrawerAppBar headerBg={location.pathname} />
            <main style={{ marginTop: location.pathname !== "/" ? '64px' : '0px' }}>
                {children}
            </main><br />
            <Footer />
        </div>
    )
}

export default Layout;