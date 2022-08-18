import { useContext } from "react";
import { PercentageContext } from "../../context/percentage.context";
import "./bill.styles.css";
const Bills = () => {
  const { setBillNumber, billNumber } = useContext(PercentageContext);

  return (
    <div className="bill-container">
      <label>Bill</label>
      <div className="bill-input">
        <div className="dollarSign">$</div>
        <input
          value={billNumber}
          type="number"
          className="textField"
          placeholder="0"
          onChange={(e) => {
            setBillNumber(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Bills;
