import Intro from "@pages/home/components/Intro";
import { ShorterLink, Statistics, Boost } from "@pages/home/components/";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <ShorterLink />
            <Statistics />
            <Boost />
        </div>
    );
}

export default Home;