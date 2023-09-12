import { useState, useEffect } from "react";
import "./setting.style.css";

export function Setting() {
  const [newName, setNewName] = useState("");
  const [newCity, setNewCity] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage when the component mounts
    const savedUserName = localStorage.getItem("userName");
    const savedUserCity = localStorage.getItem("userCity");

    if (savedUserName) {
      setNewName(savedUserName);
    }

    if (savedUserCity) {
      setNewCity(savedUserCity);
    }
  }, []);

  //update state whenever user types in <input>
  const onChangeCityHandler = (event) => setNewCity(event.target.value);
  const onChangeNameHandler = (event) => setNewName(event.target.value);

  //save new value in localStorage
  const submitUserInputHandler = () => {
    localStorage.setItem("userName", newName);
    localStorage.setItem("userCity", newCity);
  };

  return (
    <div className="form-container">
      <form className="setting-form" onSubmit={submitUserInputHandler}>
        <label className="setting-label" htmlFor="userName">
          Name
        </label>
        <input
          className="userInput"
          type="text"
          name="userName"
          id="userName"
          placeholder={newName || "Guest"}
          onChange={onChangeNameHandler}
        />

        <label className="setting-label" htmlFor="userCity">
          City
        </label>
        <input
          className="userInput"
          type="text"
          name="userCity"
          id="userCity"
          placeholder={newCity || "Munich"}
          onChange={onChangeCityHandler}
        />

        <button className="setting-btn" type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}
