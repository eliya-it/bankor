import React, { useEffect, useState } from "react";

const Input = ({
  min = 6,
  max = 32,
  validationMsg,
  type,
  onChange,
  id,
  className,
  placeholder,
  value,
  label,
  options,
  children,
}) => {
  const [errMsg, setErrMsg] = useState("");
  const checkValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const inputValueHandler = (e) => {
    const valLength = e.target.value.length;

    if (valLength < min) {
      setErrMsg(validationMsg);
      return (e.target.style.border = "1px solid red");
    }
    if (type === "email" && !checkValidEmail(e.target.value)) {
      return setErrMsg("Invalid email!");
    }
    setErrMsg("");
    return (e.target.style.border = "1px solid #ccc");
  };

  const getInputType = (type = "text", id, options) => {
    if (type === "select") {
      return (
        <select onChange={onChange} className="form__select">
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        className={` ${className ? className : ""} form__input`}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange || inputValueHandler}
        minLength={min}
        maxLength={max}
        defaultValue={value || null}
        required
      />
    );
  };
  let inputEl = getInputType("text", id);
  if (type === "email") inputEl = getInputType("email", id);
  else if (type === "password") inputEl = getInputType("password", id);
  else if (type === "select") inputEl = getInputType("select", id, options);
  return (
    <div className="form__control">
      <label htmlFor={id} className="form__label">
        {label}
      </label>

      {inputEl}
      {<p className="form__message">{errMsg}</p>}
    </div>
  );
};

export default Input;
