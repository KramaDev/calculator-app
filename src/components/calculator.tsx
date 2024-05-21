import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (value: string) => {
    if (inputValue === "0") {
      setInputValue(value);
    } else if (inputValue === "-0") {
      setInputValue("-" + value);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const clearInput = () => {
    setInputValue("");
  };

  const deleteCharacter = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  const buttons = [
    { label: "C", onClick: clearInput, className: "clear" },
    { label: "D", onClick: deleteCharacter, className: "delete" },
    { label: "%", onClick: () => inputHandler("%") },
    { label: "/", onClick: () => inputHandler("/"), className: "operator" },
    { label: "7", onClick: () => inputHandler("7") },
    { label: "8", onClick: () => inputHandler("8") },
    { label: "9", onClick: () => inputHandler("9") },
    { label: "*", onClick: () => inputHandler("*"), className: "operator" },
    { label: "4", onClick: () => inputHandler("4") },
    { label: "5", onClick: () => inputHandler("5") },
    { label: "6", onClick: () => inputHandler("6") },
    { label: "-", onClick: () => inputHandler("-"), className: "operator" },
    { label: "1", onClick: () => inputHandler("1") },
    { label: "2", onClick: () => inputHandler("2") },
    { label: "3", onClick: () => inputHandler("3") },
    { label: "+", onClick: () => inputHandler("+"), className: "operator" },
    { label: "0", onClick: () => inputHandler("0") },
    { label: "=", onClick: calculateResult, className: "equal" },
  ];

  return (
    <>
      <div className="container">
        <input value={inputValue} readOnly className="container__input-box" />
        <div className="container__button-items">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`container__button ${
                button.className ? `container__button--${button.className}` : ""
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <p className="container__signature">
        Created by{" "}
        <span>
          <a
            className="container__signature__link"
            target="_blank"
            href="https://github.com/KramaDev"
          >
            Mario Kramarić
          </a>
        </span>{" "}
        © 2024
      </p>
    </>
  );
};

export default Calculator;
