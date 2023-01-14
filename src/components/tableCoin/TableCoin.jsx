import React from "react";
import { v4 as uuidv4 } from "uuid";
import TdCard from "./TdCard";
import { useNavigate } from "react-router-dom";
import { titleData } from "../../config/TitleTableData";
import TrCard from "./TrCard";

const TableCoin = ({ coins }) => {
    const navigate = useNavigate();
    return (
        <div>
            <table className="table-user">
                <thead>
                    <tr>
                        {titleData.map((item) => (
                            <th
                                key={uuidv4()}
                                className={item.type === "left" ? "text-left" : "text-right"}
                            >
                                {item.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {coins.length > 0 &&
                        coins.map((coin, index) => (
                            <TrCard key={coin.id} className="transition-all hover:bg-slate-100">
                                <TdCard>{index + 1}</TdCard>
                                <TdCard>
                                    <div
                                        className="flex gap-x-5 cursor-pointer"
                                        onClick={() => navigate(`/coin/${coin.id}`)}
                                    >
                                        <img
                                            src={`${coin.image}`}
                                            alt=""
                                            className="w-6 h-6 object-cover"
                                        />
                                        <span className="flex items-center font-semibold">
                                            {coin.name}
                                        </span>
                                        <span className="uppercase text-gray-500">
                                            {coin.symbol}
                                        </span>
                                    </div>
                                </TdCard>
                                <TdCard type="right">${coin.current_price}</TdCard>
                                <TdCard
                                    type="right"
                                    className={
                                        coin.price_change_percentage_24h > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                >
                                    {coin.price_change_percentage_24h}%
                                </TdCard>
                                <TdCard type="right">${coin.total_volume}</TdCard>
                                <TdCard type="right">${coin.market_cap}</TdCard>
                                <TdCard
                                    type="right"
                                    className={
                                        coin.price_change_percentage_24h > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                >
                                    {coin.market_cap_change_percentage_24h}%
                                </TdCard>
                            </TrCard>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableCoin;
