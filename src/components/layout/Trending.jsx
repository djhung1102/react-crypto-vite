import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

const Trending = () => {
    const navigate = useNavigate();
    const [trendingCoin, setTrendingCoin] = useState([]);
    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await axios.get(
                    "https://api.coingecko.com/api/v3/search/trending"
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataAPI().then((res) => {
            setTrendingCoin(res);
        });
    }, []);
    // console.log(trendingCoin);
    return (
        <Fragment>
            <div className="trending-coins mt-7">
                <h2 className="font-bold text-2xl mb-4">Trending Coins</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
                    {trendingCoin?.coins?.length > 0 &&
                        trendingCoin.coins.map((coin) => (
                            <div
                                key={coin.item.coin_id}
                                className="rounded-lg p-3 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                                onClick={() => navigate(`/coin/${coin.item.id}`)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-x-2">
                                        <img
                                            src={`${coin.item.large}`}
                                            alt=""
                                            className="w-[50px]"
                                        />
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-base font-semibold">
                                                {coin.item.name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {coin.item.symbol}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="font-bold text-lg">{coin.item.score}</span>
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-base font-medium">Market Cap Rank:</span>
                                    <span>{coin.item.market_cap_rank}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-medium">Price:</span>
                                    <span
                                        className={
                                            coin.price_change_percentage_24h > 0
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }
                                    >
                                        ${coin.item.price_btc.toFixed(7)}
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Trending;
