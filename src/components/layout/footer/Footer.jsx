import LogoSVG from "@assets/icons/logo.svg?react";
import IconFacebook from "@assets/icons/icon-facebook.svg?react";
import IconTwitter from "@assets/icons/icon-twitter.svg?react";
import IconPinterest from "@assets/icons/icon-pinterest.svg?react";
import IconInstagram from "@assets/icons/icon-instagram.svg?react";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer poppins-medium">
            <LogoSVG className="footer-logo" />
            <div className="footer-content">
                <div className="footer-info">
                    <div className="footer-div features">
                        <p className="features title">Features</p>
                        <div className="features content">
                            <p className="feature-1">Link Shortening</p>
                            <p className="feature-2">Branded Links</p>
                            <p className="feature-3">Analytics</p>
                        </div>
                    </div>
                    <div className="footer-div resources">
                        <p className="resources title">Resources</p>
                        <div className="resources content">
                            <p className="resource-1">Blog</p>
                            <p className="resource-2">Developers</p>
                            <p className="resource-3">Support</p>
                        </div>
                    </div>
                    <div className="footer-div company">
                        <p className="company title">Company</p>
                        <div className="company content">
                            <p className="company-1">About</p>
                            <p className="company-2">Our Team</p>
                            <p className="company-3">Careers</p>
                            <p className="company-4">Contact</p>
                        </div>
                    </div>
                </div>
                <div className="footer-social">
                    <IconFacebook className="social-icon facebook" />
                    <IconTwitter className="social-icon twitter" />
                    <IconPinterest className="social-icon pinterest"/>
                    <IconInstagram className="social-icon instagram" />
                </div>
            </div>
        </div>
    );
}

export default Footer;