import React from "react";

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-t-gray-200">
            <div className="grid grid-cols-7 gap-x-[2rem] pt-6">
                <div className="col-span-3">
                    <img src="/logo-2.png" alt="" className="h-[40px]" />
                    <p className="mt-5 text-gray-600 text-sm">
                        CoinPress provides a fundamental analysis of the crypto market. In addition
                        to tracking price, volume and market capitalisation, CoinGecko tracks
                        community growth, open-source code development, major events and on-chain
                        metrics.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Resources</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-600">
                        <span>Crypto News</span>
                        <span>Crypto API</span>
                        <span>Crypto Heatmap</span>
                        <span>Bitcoin Treasury</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Support</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-600">
                        <span>Request Form</span>
                        <span>Help Center</span>
                        <span>FAQ</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Donations</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer  text-gray-600">
                        <span>Bitcoin</span>
                        <span>Ethereum</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Community</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-600">
                        <span>Twitter</span>
                        <span>Telegram Chat</span>
                        <span>Instagram</span>
                        <span>Reddit</span>
                        <span>Facebook</span>
                        <span>Youtube</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
