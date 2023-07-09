import { add, format } from "date-fns";
import Calendar from "react-calendar";
import "./Calendar.css";
import { useState } from "react";
import { userDate, addUserDate } from "../../global/appoinmentStore";

// Second Step Date
export const Schedule = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return; // if it's null return

    const { justDate } = date;

    const beginning = add(justDate, { hours: 9, minutes: 30 }); // oppening time in 09:30AM
    const end = add(justDate, { hours: 17 }); // closing time 05:00PM
    const interval = 30; // iterator will add 30 minutes

    const times = [];

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();
  const clickHandler = (time) => {
    setDate((prev) => ({ ...prev, dateTime: time })); // update date object
    addUserDate(date.dateTime); // pass date to global state (appoinmentStore)
  };

  return (
    <div className="date-cont">
      <h1>What time works best for you?</h1>
      {!date.justDate ? (
        <>
          <Calendar
            minDate={new Date()}
            onClickDay={(day) => {
              setDate((prev) => ({ ...prev, justDate: day }));
            }}
          />
        </>
      ) : (
        <div className="hours-cont">
          <div className="hours-wrapper">
            {times.map((time, i) => (
              <div key={`time-${i}`}>
                <button
                  id={i}
                  className="btn-stroke-white2"
                  onClick={() => {
                    clickHandler(time);
                  }}
                >
                  {format(time, "p")}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
// Second Step Date
