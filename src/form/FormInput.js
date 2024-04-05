import Input from "../common/Input";
import DropdownField from "../common/DropDown";
import Dropdown from "../common/DropDown";
import {
  validateName,
  validateDateOfBirth,
  validateDropdown,
  validateInput,
  validatePhoneNumber,
  validateEmail,
} from "../common/validation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxOptions from "../common/CheckBox";
import RadioButton from "../common/RadioButton";

function FormInput({ field, onInputChange }) {
  const { id, label, type, placeholder, options } = field;
  const [error, setErrors] = useState("");
  const [dobError, setDobError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [dropdownError, setDropDownError] = useState("");
  const [radioButtonError, setRadioButtonError] = useState("");
  const [checkboxError, setCheckBoxError] = useState("");
  const [fileError, setFileError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const error = validateDateOfBirth(date);
    setDobError(error);
    onInputChange(id, date);
  };

  const handleChange = (e) => {
    onInputChange(id, e.target.value);

    if (id === "fullname") {
      let name = validateName(e.target.value);
      setErrors(name);
    }

    if (id === "employmentType" || id == "marital_status") {
      let empType = validateDropdown(e.target.value);
      setDropDownError(empType);
    }
    if (id === "gender") {
      let genderError = validateInput(e.target.value, "radiobutton");
      setRadioButtonError(genderError);
    }
    if (id === "technologies") {
      let technologiesErr = validateInput(e.target.value, "radiobutton");
      setCheckBoxError(technologiesErr, "checkbox");
    }
    if (id === "upload_file") {
      let fileErrors = validateInput(e.target.value, "file");
      setFileError(fileErrors);
    }
    if (id === "mobile") {
      let errorPhones = validatePhoneNumber(e.target.value);
      setPhoneError(errorPhones);
    }

    if (id === "email") {
      let emailErrors = validateEmail(e.target.value);
      setEmailError(emailErrors);
    }
  };

  switch (type) {
    case "text":
      return (
        <Input
          id={id}
          label={label}
          type={type}
          handleChange={handleChange}
          error={error}
          className="form-control"
        />
      );
    case "tel":
      return (
        <Input
          id={id}
          label={label}
          type={type}
          handleChange={handleChange}
          error={phoneError}
          className="form-control "
        />
      );
    case "email":
      return (
        <Input
          id={id}
          label={label}
          type={type}
          handleChange={handleChange}
          error={emailError}
          className="form-control "
        />
      );
    case "date":
      return (
        <div className="d-flex flex-column">
          <label className="col-form-label text-secondary">DOB </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            id={id}
            className="form-control  "
          />
          {dobError && <div className="text-danger">{dobError}</div>}
        </div>
      );
    case "textarea":
      return (
        <div>
          <label htmlFor={id} className="col-form-label text-secondary">
            {label}
          </label>
          <textarea
            className="form-control mb-3"
            id={id}
            onChange={handleChange}
          ></textarea>
        </div>
      );
    case "dropdown":
      return (
        <DropdownField
          id={field.id}
          label={field.label}
          options={field.options}
          handleChange={handleChange}
          error={dropdownError}
        />
      );
    case "checkbox":
      return (
        <CheckboxOptions
          id={id}
          type="checkbox"
          label={label}
          options={options}
          handleChange={onInputChange}
          error={checkboxError}
        />
      );

    case "radiobutton":
      return (
        <RadioButton
          type="radio"
          id={id}
          label={label}
          options={options}
          handleChange={onInputChange}
          error={radioButtonError}
        />
      );

    case "dropdown":
      return (
        <Dropdown
          type="radio"
          id={id}
          label={label}
          options={options}
          handleChange={handleChange}
          error={dropdownError}
        />
      );

    case "file":
      return (
        <Input
          id="upload_file"
          label="Upload File"
          type="file"
          handleChange={handleChange}
          error={fileError}
          className="form-control"
        />
      );

    default:
      return null;
  }
}
export default FormInput;
