import { statistics } from "@/utils/utils";
import StatisticItem from "@pages/home/components/StatisticItem";
import StatisticList from "@pages/home/components/StatisticList";
import "./statistic.scss";

const Statistics = () => {
    return (
        <div className="statistic">
            <div className="statistic-content">
                <h1 className="statistic-title poppins-extrabold">Advanced Statistics</h1>
                <p className="statistic-description poppins-semibold">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <StatisticList>
                {statistics.map((item, index) => (
                    <StatisticItem
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </StatisticList>
        </div>
    );
}

export default Statistics