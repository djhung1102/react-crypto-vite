import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { titleExchange } from "../../config/TitleExchange";
import TdCard from "./TdCard";
import TrCard from "./TrCard";

const TableCoinExchange = ({ coinExchange }) => {
    const navigate = useNavigate();
    return (
        <div>
            <table className="table-user">
                <thead>
                    <tr>
                        {titleExchange.map((item) => (
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
                    {coinExchange.length > 0 &&
                        coinExchange.map((coin) => (
                            <TrCard key={coin.id} className="transition-all hover:bg-slate-100">
                                <TdCard>{coin.trust_score_rank}</TdCard>
                                <TdCard>
                                    <div
                                        className="flex gap-x-5 cursor-pointer"
                                        onClick={() => navigate(`/exchange/${coin.id}`)}
                                    >
                                        <img
                                            src={`${coin.image}`}
                                            alt=""
                                            className="w-6 h-6 object-cover"
                                        />
                                        <span className="flex items-center font-semibold">
                                            {coin.name}
                                        </span>
                                    </div>
                                </TdCard>
                                <TdCard type="right">{coin.trust_score}</TdCard>
                                <TdCard type="right">{coin.year_established}</TdCard>
                                <TdCard type="right">
                                    ${coin.trade_volume_24h_btc_normalized.toFixed(2)}
                                </TdCard>
                                <TdCard type="right">
                                    ${coin.trade_volume_24h_btc.toFixed(2)}
                                </TdCard>
                                <TdCard type="right">{coin.country}</TdCard>
                            </TrCard>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableCoinExchange;
