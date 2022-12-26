import { createChart } from 'lightweight-charts';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dummyChartData } from '../../constants';
import { selectTheme } from '../../redux/theme/selectors';

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
