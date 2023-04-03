import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';

export default function Chart(){
    const[state, setState] = useState({
        series: [{
            name: 'Peso (Kg)',
            data: [50, 100, 76, 42, 50, 68, 88, 65, 54, 37, 47, 74]
        }],
        options: {
            chart: {
                height: 150,
                type: 'bar'
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'down',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false
                }
            },
            title: {
                text: 'Peso dos resíduos acumulados por mês, 2023 (mil)',
                floating: true,
                align: 'center'
            }
        }
    });

    return(
        <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            width={880}
            height={270}
        />
    );
}