import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartDays } from "../../config/DaysData";
import Button from "../button/Button";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    responsive: true,
    elements: {
        point: {
            radius: 1,
        },
    },
};

const ChartCoinEx = ({ exId }) => {
    const [dataHistorical, setDataHistorical] = useState(null);
    const [days, setDays] = useState(1);
    useEffect(() => {
        const getDataCoin = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/exchanges/${exId}/volume_chart?days=${days}`
                );
                return response.data;
            } catch (error) {
                console.log(error);
            }
        };
        getDataCoin().then((res) => {
            setDataHistorical(res);
        });
    }, [exId, days]);
    // console.log("dataHistorical ~ ", dataHistorical);
    return (
        <Fragment>
            <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-x-1">
                    {chartDays.map((day) => (
                        <Button
                            key={day.value}
                            onClick={() => {
                                setDays(day.value);
                            }}
                            selected={day.value === days}
                            className="text-sm border border-blue-600 w-[50px] h-[30px] rounded-md transition-all hover:bg-blue-300"
                        >
                            {day.label}
                        </Button>
                    ))}
                </div>
            </div>

            {!dataHistorical && <div className="fade-loading"></div>}
            {dataHistorical && (
                <Line
                    options={options}
                    data={{
                        labels: dataHistorical?.map((coin) => {
                            let date = new Date(coin[0]);
                            let time =
                                date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price (Past ${days} Days)`,
                                data: dataHistorical?.map((coin) => coin[1]),
                                borderColor: "#7CB5EC",
                            },
                        ],
                    }}
                />
            )}
        </Fragment>
    );
};

export default ChartCoinEx;
