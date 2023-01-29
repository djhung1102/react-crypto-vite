import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";
import SearchIcon from "../../assets/icon/SearchIcon";
import Offset from "../../assets/icon/Offset";
import TitleSearch from "../layout/TitleSearch";

const Search = () => {
    const [coin, setCoin] = useState([]);
    const [wordEnter, setWordEnter] = useState("");
    const wordEnterDebounce = useDebounce(wordEnter, 1000);
    const handleSearchValue = (e) => {
        setWordEnter(e.target.value);
    };
    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/search?query=${wordEnterDebounce}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataAPI().then((res) => {
            setCoin(res);
        });
    }, [wordEnterDebounce]);
    console.log(coin);
    console.log(wordEnterDebounce);
    // max-w-[400px] h-auto border border-gray-300 rounded-lg shadow-lg
    return (
        <div className="w-full h-auto border border-gray-300 rounded-lg shadow-lg">
            <div className="p-3 flex items-center justify-between gap-x-2">
                <SearchIcon></SearchIcon>
                <input
                    type="text"
                    placeholder="Search token name or exchange"
                    className="border-none outline-none flex-1 p-1 text-slate-900 text-sm"
                    onChange={handleSearchValue}
                />
                <Offset></Offset>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
                <div className="flex flex-col">
                    <TitleSearch>Trending Search</TitleSearch>
                    {coin?.coins?.length > 0 &&
                        coin.coins.slice(0, 6).map((item) => (
                            <div
                                key={item.id}
                                className="p-3 flex items-center justify-between cursor-pointer transition-all hover:bg-gray-200"
                            >
                                <div className="flex items-center gap-x-2">
                                    <img src={`${item.thumb}`} alt="" className="h-[20px]" />
                                    <span className="text-sm font-medium text-[#656565]">
                                        {item.name}
                                    </span>
                                    <span className="text-sm font-medium text-[#656565]">
                                        ({item.symbol})
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500">
                                    #{item.market_cap_rank}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="flex flex-col">
                    <TitleSearch>NFT Search</TitleSearch>
                    {coin?.nfts?.length > 0 &&
                        coin.nfts.slice(0, 6).map((item) => (
                            <div
                                key={item.id}
                                className="p-3 flex items-center justify-between cursor-pointer transition-all hover:bg-gray-200"
                            >
                                <div className="flex items-center gap-x-2">
                                    <img src={`${item.thumb}`} alt="" className="h-[20px]" />
                                    <span className="text-sm font-medium text-[#656565]">
                                        {item.name}
                                    </span>
                                    <span className="text-sm font-medium text-[#656565]">
                                        ({item.symbol})
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
