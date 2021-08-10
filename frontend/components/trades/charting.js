import ApexCharts from 'apexcharts';
import React from 'react';

export function chartData(data, ticker) {
    let create = {
        series: [{
            type: 'candlestick',
            data: []
        }],
        chart: {
            height: 500,
            type: 'candlestick'
        },
        title: {
            text: `${ticker}`,
            align: 'left'
        },
        grid: {
            column: {
                colors: ['#000']
            }
        }
    };

    for (let i = data['date'].length - 1; i >= 0; i--) {
        let date = data['date'][i];
        let open = data['open'][i];
        let high = data['high'][i];
        let low = data['low'][i];
        let close = data['close'][i];
        let dataObj = {
            x: (date),
            y: [open, high, low, close]
        }
        create.series[0].data.push(dataObj);
    }
    return create;
};

export function createChart(chartInfo) {
    return (
        new ApexCharts(document.getElementById("chart"), chartInfo)
    )
};
