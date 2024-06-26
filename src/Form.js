import "./Form.css";
import { useState } from "react";
import SubmitMessage from "./SubmitMessage";

export default function Form() {
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [valid, setValid] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setShowMessage(true);
  }

  //   function getValues(e) {
  //     // const newInfo = { ...info };
  //     const userName = e.target.value;
  //     setInfo([...info, { name: userName }]);
  //   }
  function handleDivClicked() {
    setErrorMessage(null);
    if (showMessage) {
      setShowMessage(false);
    }

    const { age, phoneNumber } = info;
    if (age < 18 || age > 100) {
      setErrorMessage("Age Not Allowed!");
    } else if (
      phoneNumber.length < 10 ||
      phoneNumber.length > 12 ||
      phoneNumber === Number
    ) {
      setErrorMessage("Phone Number is Incorrect!");
    } else {
      setErrorMessage("Your form has been submited successfully");
    }
  }

  // function checking() {

  // }
  const isDisabled =
    info.name === "" || info.age === "" || info.phoneNumber === "";

  return (
    <div onClick={handleDivClicked}>
      <h1>Request a lone</h1>
      <form>
        <label>Name </label>
        <input
          placeholder="Enter your name..."
          value={info.name}
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        <label>Phone Number </label>
        <input
          placeholder="Enter your phone number..."
          value={info.phoneNumber}
          onChange={(e) => {
            setInfo({ ...info, phoneNumber: e.target.value });
          }}
        />
        <label>Age </label>
        <input
          placeholder="Enter your age..."
          value={info.age}
          onChange={(e) => {
            setInfo({ ...info, age: e.target.value });
          }}
        />
        <label>Are You An Employee?</label>
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => {
            setInfo({ ...info, isEmployee: e.target.checked });
          }}
        />
        <label>Salery</label>
        <select
          value={info.salary}
          onChange={(e) => {
            setInfo({ ...info, salary: e.target.value });
          }}
        >
          <option>Less then $100</option>
          <option>Between $100 and $500</option>
          <option>More then $500</option>
        </select>
        <button
          className={isDisabled ? "disabaled" : ""}
          onClick={submitForm}
          disabled={isDisabled}
        >
          Submit
        </button>
        <SubmitMessage show={showMessage} errorMessage={errorMessage} />
      </form>
    </div>
  );
}
// #2b2d42 dark blue
// #8d99ae purple
// #ef233c red
