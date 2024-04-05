import React, { useState } from "react";

const RadioButton = ({ id, label, options, handleChange, error }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    handleChange(id, optionId);
  };

  return (
    <div className="form-group">
      <div>
        <label className="col-form-label text-secondary">{label}</label>
        {options.map((option) => (
          <div className="form-check" key={option.id}>
            <input
              type="radio"
              id={`${id}-${option.id} mb-3`}
              className="form-check-input"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
            />
            <label className="form-check-label" htmlFor={`${id}-${option.id} `}>
              {option.display}
            </label>
          </div>
        ))}
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default RadioButton;
