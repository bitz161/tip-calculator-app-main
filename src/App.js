import PercentageTip from "./component/percentage/percentage.component";
import TotalNumber from "./component/total/total.component";
import NumberOfPeople from "./component/peoples/peoples.component";
import Bills from "./component/bill/bill.component";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="h1-container">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>

      <div className="container">
        <div className="info-container">
          {/* Bill Amount */}
          <Bills />

          {/* Percentage Buttons */}
          <PercentageTip />

          {/* number of people and save into the context */}
          <NumberOfPeople />
        </div>
        {/* Total Component */}
        <TotalNumber />
      </div>
    </div>
  );
};

export default App;
