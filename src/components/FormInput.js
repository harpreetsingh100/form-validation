import React from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, ...input } = props;
  return (
    <div className="flex flex-col w-[300px]">
      <label>{props.label}</label>
      <input
        {...input}
        onChange={onChange}
        className="p-3 mt-3 rounded-lg my-2"
      />
      <span></span>
    </div>
  );
};

export default FormInput;
