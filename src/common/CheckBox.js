import React, { useState } from "react";

function CheckboxOptions({ id, type, options, handleChange, error, label }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    handleChange(id, selectedOptions);
  };

  return (
    <div className="form-group">
      <label className="col-form-label text-secondary">{label}</label>
      {options.map((option) => (
        <div className="form-check" key={option}>
          <input
            id={id}
            className="form-check-input"
            type={type}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <label className="form-check-label">{option}</label>{" "}
        </div>
      ))}
      <p className="text-danger">{error}</p>{" "}
    </div>
  );
}

export default CheckboxOptions;
