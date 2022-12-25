import { motion } from 'framer-motion';
import LiquidityTab from '../../components/liquidity/LiquidityTab';
import Table from '../../components/liquidity/Table';

const MLP = [
  {
    id: '1',
    title: 'Price',
    number: '$0.00',
  },
  {
    id: '2',
    title: 'APR',
    number: '0.00%',
  },
  {
    id: '3',
    title: 'Total Supply',
    number: '$0.00',
  },
];

export default function Liquidity() {
  //   const [tab, setTab] = useState("MLP");

  return (
    <div className="liquidity">
      <div className="auto__container">
        <div className="liquidity__inner">
          <div className="liquidity__inner-row">
            <div className="liquidity__inner-col">
              <div className="liquidity__inner-box">
                <h6 className="sm">Buy & Sell MLP</h6>
                <p className="xsm mW">
                  Purchase MLP Token to earn FNT fees from swaps and leverages
                  trading.
                </p>
              </div>
              <div className="liquidity__inner-box h100">
                {MLP.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 * index }}
                      exit={{ opacity: 0, x: -20 }}
                      className="overviewItem"
                      key={item.id}
                    >
                      <h6 className="xsm">{item.title}</h6>
                      <p className="xsm">{item.number}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="liquidity__inner-col">
              <div className="liquidity__inner-box">
                <LiquidityTab />
              </div>
            </div>
          </div>
          <div className="table__outer">
            <div className="table__header">
              <h6 className="sm">Save on Fees </h6>
              <p className="xsm">
                Fees may vary depending on which asset you use to buy GLP.
              </p>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
