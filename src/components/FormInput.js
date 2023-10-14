import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="flex flex-col w-full">
      <label className="text-lg">{props.label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="p-3 mt-3 rounded-lg my-2 border-2"
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span className="text-sm text-red-500 hidden">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
