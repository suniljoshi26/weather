import React from "react";

export const Time = () => {
  const [ctime, setTime] = useState();
  // date
  const d = new Date();
  console.log("hhsg", d);
  const date = d.getDate();
  const year = d.getFullYear;
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.toLocaleString("default", { weekday: "long" });
  // time
  const time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const hand = () => {
    setTime(time);
  };
  setInterval(() => {
    hand();
  }, 1000);

  return (
    <div>
      <p className="card-text">
        {day},{month},{date},{year}
        <br />
        {ctime}
      </p>
    </div>
  );
};
