import "./percentage.styles.css";
import { useContext } from "react";
import { PercentageContext } from "../../context/percentage.context";

const PercentageTip = () => {
  const { SetPercentage, percentage } = useContext(PercentageContext);

  const handlePercentage = (e) => {
    return SetPercentage(e.target.value);
  };

  const tipArray = [5, 10, 15, 25, 50];
  const tipKey = [0, 1, 2, 3, 4];

  return (
    <div className="percentage-container">
      <div className="btn-label">Select Tip %</div>
      <div className="btn-container">
        {tipArray.map((data, index) => {
          return (
            <button
              className={`btnPercentage`}
              key={tipKey[index]}
              value={data}
              onClick={(e) => {
                handlePercentage(e);
              }}
            >{`${data}%`}</button>
          );
        })}
        <input
          value={percentage}
          className="btnPercentage"
          placeholder="Custom"
          onChange={(e) => {
            handlePercentage(e);
          }}
        />
      </div>
    </div>
  );
};

export default PercentageTip;
