import React, { Fragment } from "react";
import ItemStatistics from "./ItemStatistics";

const CoinStatistics = ({ coinDetail }) => {
    const { market_data } = coinDetail;
    return (
        <Fragment>
            <ItemStatistics title="Bitcoin prices">
                ${market_data?.current_price.usd}
            </ItemStatistics>
            <ItemStatistics title="24h Low / 24h High">
                ${market_data?.low_24h.usd} / ${market_data?.high_24h.usd}
            </ItemStatistics>
            <ItemStatistics title="Trading Volume">
                ${market_data?.total_volume.usd}
            </ItemStatistics>
            <ItemStatistics title="Market Cap Rank">
                #{market_data?.market_cap_rank}
            </ItemStatistics>
            <ItemStatistics title="Market Cap">
                ${market_data?.market_cap.usd}
            </ItemStatistics>
            <ItemStatistics title="All-Time High">
                ${market_data?.ath.usd}
            </ItemStatistics>
            <ItemStatistics title="All-Time Low">
                ${market_data?.atl.usd}
            </ItemStatistics>
        </Fragment>
    );
};

export default CoinStatistics;
