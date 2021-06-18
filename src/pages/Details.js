import InputDate from "elements/Form/InputDate";
import InputNumber from "elements/Form/InputNumber";
import React, { useState } from "react";

const Details = () => {
  const [numberValue, setNumberValue] = useState({ value: "1" });
  const handleChange = (e) => {
    setNumberValue({ value: e.target.value });
  };
  return (
    <div>
      <InputNumber
        max={30}
        name="count"
        onChange={handleChange}
        value={numberValue.value}
        suffix="night"
        isSuffixPlural
      />
      <InputDate name="date" />
    </div>
  );
};

export default Details;
