import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export const Root = () => {
    return (
        <>
            <div className="content-main">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}
