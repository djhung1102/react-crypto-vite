import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ChartCoin from "../components/layout/ChartCoin";
import CoinStatistics from "../components/layout/CoinStatistics";

const CoinDetailPage = () => {
    const { coinId } = useParams();
    const [coinDetail, setCoinDetail] = useState([]);
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
    console.log("coinDetail ~ ", coinDetail);

    return (
        <Fragment>
            {!coinDetail && <div className="circle-loading"></div>}
            {coinDetail && (
                <div className="coin-detail">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={`${coinDetail.image?.large}`}
                            alt=""
                            className="h-[150px]"
                        />
                        <div className="flex flex-row items-center mt-4 font-extrabold text-3xl gap-x-2">
                            <span className="">{coinDetail.name}</span>
                            <span className="uppercase">
                                ({coinDetail.symbol})
                            </span>
                            <span className="text-white px-2 py-1 bg-slate-600 text-sm rounded-lg">
                                Rank #{coinDetail.market_cap_rank}
                            </span>
                        </div>
                        <span className="text-base font-medium text-center mt-2 pr-[200px] pl-[200px]">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: coinDetail.description?.en.split(
                                        ". ",
                                        2
                                    ),
                                }}
                            ></div>
                        </span>
                    </div>
                    <div className="chart-coin mt-10 flex gap-x-9 p-6">
                        <div className="w-[800px] h-[460px]">
                            <ChartCoin coinDetail={coinDetail}></ChartCoin>
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
