import React, { Fragment } from "react";

const CoinTitle = ({ coinDetail }) => {
    const { image, symbol, description } = coinDetail;
    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center">
                <img src={`${image?.large}`} alt="" className="h-[150px]" />
                <div className="flex flex-row items-center mt-4 text-3xl gap-x-4">
                    <span className="font-extrabold">{coinDetail.name}</span>
                    <span className="uppercase text-xl text-[#6B7290]">
                        {symbol}
                    </span>
                </div>
                <span className="text-base font-medium text-center mt-2 pr-[200px] pl-[200px]">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: description?.en.split(". ", 2),
                        }}
                    ></div>
                </span>
            </div>
        </Fragment>
    );
};

export default CoinTitle;
