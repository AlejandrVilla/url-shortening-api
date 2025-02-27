import logo from "/icons/logo.svg";
import iconHamburger from "/icons/icon-hamburger.svg"
import { getWindowType, menuVariants } from "@/utils/utils";
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
            <img className="header-logo" src={logo} alt="logo" />
            {windowType === "phone" ? (
                <>
                    <img
                        onClick={handleClick}
                        src={iconHamburger}
                        alt="icon hamburger"
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