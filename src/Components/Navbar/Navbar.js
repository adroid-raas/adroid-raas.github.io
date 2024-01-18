// import { NavLink } from "react-router-dom";
import { useState } from "react";
import './style.css'

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive)
    };

    const closeMobileMenu = () => {
        setMobileMenuActive(false)
    }

    const menuItems = [
        {mid: 1, label: 'Home', link: '#home'},
        {mid: 2, label: 'Products', link: '#products'},
        {mid: 3, label: 'Process', link: '#process'},
        {mid: 4, label: 'Industries', link: '#industries'},
        {mid: 5, label: 'About', link: '#about'},
    ]

    return (
        <div className={` ${mobileMenuActive ? 'ad-mobile-nav-open' : ''}`}>
            <nav>
                <ul>
                    {
                        menuItems.map((menuList) => (
                                <li key={menuList.mid}><a onClick={closeMobileMenu} href={menuList.link}>{menuList.label}</a></li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div onClick={toggleMobileMenu} className="ad-menu-toggle">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;