import React, { useEffect, useState } from "react";
import axios from "axios";
import TableCoin from "../components/tableCoin/TableCoin";
import ReactPaginate from "react-paginate";

const itemsPerPage = 100;
const HomePage = () => {
    useEffect(() => {
        document.title = "Cryptocurrency Prices";
    }, []);
    const [nextPage, setNextPage] = useState(1);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${nextPage}&sparkline=false`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataAPI().then((res) => {
            setCoins(res);
        });
    }, [nextPage]);

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        if (!coins) return;
        setPageCount(Math.ceil(12811 / itemsPerPage));
    }, [coins, itemOffset]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % 12811;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    return (
        <div>
            <section className="all-categories px-5">
                <h2 className="font-bold text-2xl mb-4">
                    Cryptocurrency Prices by Market Cap
                </h2>
                <div className="flex items-center justify-between mb-4">
                    <span className="capitalize px-3 py-2 border border-gray-400 rounded-3xl text-sm font-medium">
                        All categories
                    </span>
                </div>
                <div>
                    <TableCoin coins={coins}></TableCoin>
                </div>
                <div className="mt-10">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< Previous"
                        renderOnZeroPageCount={null}
                        className="pagination"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
