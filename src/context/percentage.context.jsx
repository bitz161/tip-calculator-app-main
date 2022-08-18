import { createContext, useState, useEffect } from "react";

export const PercentageContext = createContext({
  percentage: "",
  numberUser: "",
  billNumber: "",
  totalPerPerson: 0,
  tipPerPerson: 0,
});

export const PercentageProvider = ({ children }) => {
  const [percentage, SetPercentage] = useState("");
  const [numberUser, setNumberUser] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  const [tipPerPerson, setTipPerPerson] = useState(0.0);

  useEffect(() => {
    setTotalPerPerson((parseInt(billNumber) / parseInt(numberUser)).toFixed(2));
  }, [billNumber, numberUser, percentage, tipPerPerson]);
  useEffect(() => {
    setTipPerPerson(
      (parseInt(totalPerPerson) * (parseInt(percentage) / 100)).toFixed(2)
    );
  }, [totalPerPerson, percentage, numberUser, billNumber]);

  const value = {
    percentage,
    SetPercentage,
    numberUser,
    setNumberUser,
    billNumber,
    setBillNumber,
    totalPerPerson,
    tipPerPerson,
  };
  return (
    <PercentageContext.Provider value={value}>
      {children}
    </PercentageContext.Provider>
  );
};
