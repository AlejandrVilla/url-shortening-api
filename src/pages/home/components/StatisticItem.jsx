import "./statisticItem.scss";

const StatisticItem = ({ item, index }) => {

    const className = `statistic-item item-${index}`;
    return (
        <div className={className}>
            <div className="statistic-item-image-div">
                <img className="statistic-item-image" src={item.icon} alt="icon"/>
            </div>
            <h2 className="statistic-item-title poppins-bold">{item.title}</h2>
            <p className="statistic-item-description poppins-medium">{item.description}</p>
        </div>
    );
}

export default StatisticItem;
