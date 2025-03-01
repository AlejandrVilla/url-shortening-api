import IntroSVG from "@assets/icons/illustration-working.svg?react";
import "./intro.scss";
import GetStartedButton from "@components/common/GetStartedButton";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-body">
                <h1 className="intro-title poppins-bold">More than just shorter links</h1>
                <p className="intro-content poppins-medium">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <div className="get-started-button-div">
                    <GetStartedButton />
                </div>
            </div>
            <IntroSVG className="intro-image"/>
        </div>
    );
}

export default Intro;