import { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });

  return (
    <div>
      <h5> Time : {date.toLocaleTimeString()}</h5>
      <h6> Date : {date.toLocaleDateString()}</h6>
    </div>
  );
};

export default DateTime;
