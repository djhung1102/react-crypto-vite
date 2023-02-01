import React, { Fragment } from "react";
import ItemStatistics from "../layout/ItemStatistics";

const CoinStatisticsEx = ({ coinDetail }) => {
    return (
        <Fragment>
            <ItemStatistics title="Year Established">{coinDetail.year_established}</ItemStatistics>
            <ItemStatistics title="Country">{coinDetail.country}</ItemStatistics>
            <ItemStatistics title="Trading Volume">
                ${coinDetail?.trade_volume_24h_btc}
            </ItemStatistics>
            <ItemStatistics title="Market Cap Rank">#{coinDetail?.trust_score_rank}</ItemStatistics>
        </Fragment>
    );
};

export default CoinStatisticsEx;
