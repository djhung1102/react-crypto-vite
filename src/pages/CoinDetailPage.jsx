import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ChartCoin from "../components/chart/ChartCoin";
import CoinTitle from "../components/layout/CoinTitle";
import CoinStatistics from "../components/statistics/CoinStatistics";

const CoinDetailPage = () => {
    useEffect(() => {
        document.title = "Coin Detail Page";
    }, []);
    const { coinId } = useParams();
    const [coinDetail, setCoinDetail] = useState(null);
    useEffect(() => {
        const getDataCoin = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${coinId}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataCoin().then((res) => {
            setCoinDetail(res);
        });
    }, [coinId]);
    // console.log("coinDetail ~ ", coinDetail);

    return (
        <Fragment>
            {!coinDetail && <div className="circle-loading"></div>}
            {coinDetail && (
                <div className="coin-detail">
                    <CoinTitle coinDetail={coinDetail}></CoinTitle>
                    <div className="chart-coin mt-10 flex gap-x-9 p-6">
                        <div className="w-[800px] h-[460px] flex flex-col gap-y-2">
                            <h2 className="text-2xl font-bold">
                                {coinDetail.name} Price Chart
                            </h2>
                            <span className="text-sm text-[#724A4A]">
                                Last updated{" "}
                                {new Date(coinDetail.last_updated).getHours() >
                                12
                                    ? `${
                                          new Date(
                                              coinDetail.last_updated
                                          ).getHours() - 12
                                      }:${new Date(
                                          coinDetail.last_updated
                                      ).getMinutes()} PM`
                                    : `${new Date(
                                          coinDetail.last_updated
                                      ).getHours()}:${new Date(
                                          coinDetail.last_updated
                                      ).getMinutes()} AM`}{" "}
                                UTC . Currency in USD.
                            </span>
                            <ChartCoin coinId={coinId}></ChartCoin>
                        </div>
                        <div className="flex-1 p-5 bg-[#F3F4F6] rounded-2xl">
                            <h2 className="capitalize font-bold text-2xl mb-5">
                                <span className="uppercase">
                                    {coinDetail.symbol}
                                </span>{" "}
                                Price Statistics
                            </h2>
                            <CoinStatistics
                                coinDetail={coinDetail}
                            ></CoinStatistics>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default CoinDetailPage;
