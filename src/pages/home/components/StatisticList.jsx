import "./statisticList.scss";

const StatisticList = ({ children }) => {
    return (
        <div className="statistic-list">
            <hr />
            {children}
        </div>
    );
}

export default StatisticList;