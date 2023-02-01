import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ChartCoin from "../components/chart/ChartCoin";
import ChartCoinEx from "../components/chart/ChartCoinEx";
import CoinTitle from "../components/layout/CoinTitle";
import CoinTitleEx from "../components/layout/CoinTitleEx";
import CoinStatistics from "../components/statistics/CoinStatistics";
import CoinStatisticsEx from "../components/statistics/CoinStatisticsEx";

const ExchangeDetailPage = () => {
    useEffect(() => {
        document.title = "Exchange Detail Page";
    }, []);
    const { exId } = useParams();
    const [coinDetail, setCoinDetail] = useState(null);
    useEffect(() => {
        const getDataCoin = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/exchanges/${exId}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataCoin().then((res) => {
            setCoinDetail(res);
        });
    }, [exId]);
    // console.log("coinDetail ~ ", coinDetail);

    return (
        <Fragment>
            {!coinDetail && <div className="circle-loading"></div>}
            {coinDetail && (
                <div className="coin-detail">
                    <CoinTitleEx coinDetail={coinDetail}></CoinTitleEx>
                    <div className="chart-coin mt-10 flex gap-x-9 p-6">
                        <div className="w-[800px] h-[460px] flex flex-col gap-y-2">
                            <h2 className="text-2xl font-bold">{coinDetail.name} Price Chart</h2>
                            <span className="text-sm text-[#724A4A]">
                                Last updated{" "}
                                {new Date(coinDetail.last_updated).getHours() > 12
                                    ? `${
                                          new Date(coinDetail.last_updated).getHours() - 12
                                      }:${new Date(coinDetail.last_updated).getMinutes()} PM`
                                    : `${new Date(coinDetail.last_updated).getHours()}:${new Date(
                                          coinDetail.last_updated
                                      ).getMinutes()} AM`}{" "}
                                UTC . Currency in USD.
                            </span>
                            <ChartCoinEx exId={exId}></ChartCoinEx>
                        </div>
                        <div className="flex-1 p-5 bg-[#F3F4F6] rounded-2xl">
                            <h2 className="capitalize font-bold text-2xl mb-5">
                                <span className="uppercase"></span> Price
                                Statistics
                            </h2>
                            <CoinStatisticsEx coinDetail={coinDetail}></CoinStatisticsEx>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default ExchangeDetailPage;
