import "./date.style.css";

export function DateComponent() {
  const currentTime = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDay = weekdays[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = months[currentTime.getMonth()];

  return (
    <>
      <h2 className="date-display">
        {currentDay}, {currentDate}. {currentMonth}
      </h2>
    </>
  );
}
