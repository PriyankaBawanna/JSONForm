import React from "react";

function Dropdown({ id, label, options, handleChange, error }) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={id} className="col-form-label text-secondary">
        {label}
      </label>
      <select id={id} className="form-select " onChange={handleChange}>
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.display}
          </option>
        ))}
      </select>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Dropdown;
