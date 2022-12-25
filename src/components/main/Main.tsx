/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createChart, CrosshairMode } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { dummyChartData } from '../../constants';
import { selectTheme } from '../../redux/theme/selectors';

// function isMobile() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }

export const ChartComponent = (props: any) => {
  const { data } = props;
  const chartContainerRef = useRef<null | HTMLDivElement>(null);
  const theme = useSelector(selectTheme);

  const backgroundColor = 'black';
  const lineColor = '#2962FF';
  const textColor = 'white';
  const areaTopColor = '#2962FF';
  const areaBottomColor = 'rgba(41, 98, 255, 0.28)';

  useEffect(() => {
    const handleResize = () => {
      console.log(chartContainerRef.current?.clientHeight);
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth,
        height: chartContainerRef.current?.clientHeight,
      });
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        backgroundColor: theme === 'dark' ? '#1e293b' : '#f7f5f5',
        textColor: theme === 'dark' ? '#f7f5f5' : 'rgba(0, 0, 0, 0.9)',
      },
      // grid: {
      //   vertLines: {
      //     color: 'rgba(197, 203, 206, 0.5)',
      //   },
      //   horzLines: {
      //     color: 'rgba(197, 203, 206, 0.5)',
      //   },
      // },
      // crosshair: {
      //   mode: CrosshairMode.Normal,
      // },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      width: chartContainerRef.current?.clientWidth,
      height: 400,
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#0029FF',
      downColor: '#000',
      borderDownColor: '#0029FF',
      borderUpColor: '#0029FF',
      wickDownColor: '#0029FF',
      wickUpColor: '#0029FF',
    });

    candleSeries.setData(dummyChartData);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    theme,
  ]);

  return (
    <div
      id="tradingview-graph1"
      className="tradeMain__graph"
      ref={chartContainerRef}
    />
  );
};

export default function Main() {
  return (
    <div className="tradeMain">
      <div className="tradeMain__header">
        <div className="button primary">ETH / USD</div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">Price</h6>
          <p className="xsm">$1,630.70</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H Chance</h6>
          <p className="xsm">-0.88%</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H High</h6>
          <p className="xsm">1,666.90</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H Low</h6>
          <p className="xsm">1,623.70</p>
        </div>
      </div>
      <ChartComponent />
      {/* <div ref={ref} id="tradingview-graph1" className="tradeMain__graph" /> */}
    </div>
  );
}
