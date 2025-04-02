import LogoSVG from "@assets/icons/logo.svg?react";
import HamburgerSVG from "@assets/icons/icon-hamburger.svg?react"
import { getWindowType, menuVariants } from "@utils/";
import { AnimatePresence, motion } from "framer-motion";
import "./header.scss";

const Header = ({ menuIsActive, setMenuIsActive }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        setMenuIsActive(!menuIsActive);
    }

    const windowType = getWindowType(window.innerWidth);
    const navBar =
        <motion.div
            className="header-nav-access"
            onClick={(e) => e.stopPropagation()}
            key="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <nav className="header-nav">
                <p className="header-feature">Features</p>
                <p className="header-pricing">Pricing</p>
                <p className="header-resources">Resources</p>
            </nav>
            <div className="header-access">
                <p className="header-login">Login</p>
                <p className="header-signup">Sign Up</p>
            </div>
        </motion.div>

    return (
        <div className="header poppins-medium">
            <LogoSVG className="header-logo"/>
            {windowType === "mobile" ? (
                <>
                    <HamburgerSVG
                        className="hamburger-icon"
                        onClick={handleClick}
                    />
                    <AnimatePresence mode="sync">
                        {menuIsActive && navBar}
                    </AnimatePresence>
                </>
            ) : (
                <>
                    {navBar}
                </>
            )
            }
        </div>
    );
}

export default Header;