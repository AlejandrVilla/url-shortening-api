import Intro from "@pages/home/components/Intro";
import { useState } from "react";
import { ShorterLink, Statistics, Boost } from "@pages/home/components/";
import ShorterLinkList from "@pages/home/components/ShorterLinkList";
import ShorterLinkItem from "@pages/home/components/ShorterLinkItem";
import "./home.scss";

const storedLinks = JSON.parse(localStorage.getItem("links"));
const Home = () => {
    const [links, setLinks] = useState(storedLinks || []);

    return (
        <div className="home">
            <Intro />
            <ShorterLink
                links={links}
                setLinks={setLinks}
            />
            <ShorterLinkList>
                {links.map((link, index) => (
                    <ShorterLinkItem
                        key={index}
                        link={link}
                    />
                ))}
            </ShorterLinkList>
            <Statistics />
            <Boost />
        </div>
    );
}

export default Home;