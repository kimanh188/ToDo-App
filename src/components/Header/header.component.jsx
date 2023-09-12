import { useState, useEffect } from "react";
import { DateComponent } from "./Date/date.component";
import { WeatherComponent } from "./Weather/weather.component";

import "./header.style.css";

export function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve user name from localStorage when the component mounts
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  return (
    <header>
      <div>
        <DateComponent />
        <WeatherComponent />
        <div>
          <h3 className="welcome-heading">Hello {userName || "Guest"}!</h3>
        </div>
      </div>

      <div className="hero-icons">
        <img className="icon icon1" src="clock_alarm_icon.png" alt="clock" />
        <img
          className="icon icon2"
          src="checkmark_list_icon.png"
          alt="checklist"
        />
      </div>
    </header>
  );
}
