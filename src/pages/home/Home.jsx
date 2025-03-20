import Intro from "@pages/home/components/Intro";
import { ShorterLink, Statistics } from "@pages/home/components/";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <ShorterLink />
            <Statistics />
            {/* 
            Boost your links today

            Get Started */}
        </div>
    );
}

export default Home;