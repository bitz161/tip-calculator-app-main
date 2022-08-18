import "./total.styles.css";
import { useContext } from "react";
import { PercentageContext } from "../../context/percentage.context";

const TotalNumber = () => {
  const {
    totalPerPerson,
    tipPerPerson,
    percentage,
    numberUser,
    billNumber,
    setBillNumber,
    setNumberUser,
    SetPercentage,
  } = useContext(PercentageContext);

  const handleReset = () => {
    setBillNumber("");
    setNumberUser("");
    SetPercentage("");
  };

  return (
    <div className="total-container">
      <div className="tipPerPerson-container">
        <div>
          Tip Amount <br />
          <span className="perPerson">/ person</span>
        </div>
        {tipPerPerson > 0 && percentage > 0 ? (
          <div className="totalPrice">{`$${tipPerPerson}`}</div>
        ) : (
          <div className="totalPrice">$0.00</div>
        )}
      </div>

      <div className="totalPerPerson-container">
        <div>
          Total <br />
          <span className="perPerson">/ person</span>
        </div>
        {totalPerPerson > 0 && numberUser > 0 && billNumber > 0 ? (
          <div className="totalPrice">{`$${totalPerPerson}`}</div>
        ) : (
          <div className="totalPrice">$0.00</div>
        )}
      </div>

      <button className="btnReset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TotalNumber;
