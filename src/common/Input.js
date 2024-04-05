import React from "react";

const Input = ({
  id,
  label,
  type,
  placeholder,
  handleChange,
  error,
  className,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="col-form-label text-secondary">
        {label}
      </label>
      <div className="input-group">
        <input
          className={`form-control ${className} mb-3`}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;
