import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Introduce from "../components/layout/Introduce";
import Trending from "../components/layout/Trending";
import TableCoinExchange from "../components/tableCoin/TableCoinExchange";

const ExchangesPage = () => {
    const [coinExchange, setCoinExchange] = useState(null);
    const [nextPage, setNextPage] = useState(1);
    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${nextPage}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataAPI().then((res) => {
            setCoinExchange(res);
        });
    }, [nextPage]);
    // console.log(coinExchange);

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        if (!coinExchange) return;
        setPageCount(Math.ceil(565 / 100));
    }, [coinExchange, itemOffset]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 100) % 565;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    return (
        <Fragment>
            {!coinExchange && <div className="circle-loading"></div>}
            {coinExchange && (
                <section className="px-5">
                    <Introduce
                        title="Top Crypto Exchanges Ranked by Trust Score"
                        tag="All Countries"
                    >
                        As of today, we track 565 crypto exchanges with a total 24h trading volume
                        of $44.5 Billion.
                    </Introduce>
                    <div>
                        <TableCoinExchange coinExchange={coinExchange}></TableCoinExchange>
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
                    <Trending></Trending>
                </section>
            )}
        </Fragment>
    );
};

export default ExchangesPage;
