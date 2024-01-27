import { useLocation } from "react-router-dom";
import DrawerAppBar from "../Appbar"
import { Footer } from "../Footer"

const Layout = ({ children }) => {

    let location = useLocation();
    return (
        <div className="App">
            <DrawerAppBar headerBg={location.pathname}/>
            <main style={{marginTop:'64px'}}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;