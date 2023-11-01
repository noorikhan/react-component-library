import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  placeholder = "text",
  name = "text",
  label,
  value,
  onChange,
}) => (
  <div className="simple-form-group">
    {label && (
      <label className="simple-text-label" for={name}>
        {label}
      </label>
    )}
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className="simple-text-input"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
