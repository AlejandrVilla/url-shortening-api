import GetStartedButton from "@/components/common/GetStartedButton";
import { getWindowType } from "@/utils/utils";
import "./boost.scss";

const Boost = () => {
    const windowType = getWindowType(window.innerWidth);

    return (
        <div className="boost" style={{backgroundImage: `url(./icons/bg-boost-${windowType}.svg)`}}>
            <h1 className="boost-title poppins-extrabold">Boost your links today</h1>
            <div className="get-started-boost-div">
                <GetStartedButton />
            </div>
        </div>
    );
}

export default Boost;