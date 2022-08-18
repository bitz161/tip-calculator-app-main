import { useContext } from "react";
import { PercentageContext } from "../../context/percentage.context";
import "./peoples.styles.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";

const NumberOfPeople = () => {
  const { setNumberUser, numberUser } = useContext(PercentageContext);
  return (
    <div className="people-container">
      <label>Number of People</label>
      <div className="people-input">
        <IconButton size="medium">
          <PersonIcon />
        </IconButton>
        <input
          value={numberUser}
          placeholder="0"
          onChange={(e) => {
            setNumberUser(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NumberOfPeople;
