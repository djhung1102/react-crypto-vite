import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import TableCoin from "../components/tableCoin/TableCoin";
import ReactPaginate from "react-paginate";
import Introduce from "../components/layout/Introduce";
import Trending from "../components/layout/Trending";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    useEffect(() => {
        document.title = "Cryptocurrency Prices and Market Cap";
    }, []);
    const [nextPage, setNextPage] = useState(1);
    const [coins, setCoins] = useState(null);

    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${nextPage}&sparkline=false`
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
        setPageCount(Math.ceil(12811 / 50));
    }, [coins, itemOffset]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 50) % 12811;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    return (
        <Fragment>
            {!coins && <div className="circle-loading"></div>}
            {coins && (
                <section className="all-categories px-5 mt-5">
                    <Introduce title="Cryptocurrency Prices by Market Cap" tag="All categories">
                        The global cryptocurrency market cap today is $885 Billion.
                    </Introduce>
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
                    <Trending></Trending>
                    <Footer></Footer>
                </section>
            )}
        </Fragment>
    );
};

export default HomePage;
