import { useState } from "react";
import FormInput from "./FormInput";

function DynamicFormGenerator({ formData, setFormData }) {
  const [fields, setFields] = useState(formData.fields);
  const [removedFields, setRemovedFields] = useState([]);
  const [removed, setRemoved] = useState(false);
  const [addExtraInfo, setAddExtraInfo] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      fields: prevData.fields.map((field) =>
        field.id === id ? { ...field, value } : field
      ),
    }));

    if (id === "employmentType" && value === "1") {
      setAddExtraInfo(true);
    }
    if (id === "employmentType" && value === "2") {
      setAddExtraInfo(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myobj = {};

    formData.fields.forEach((item) => {
      myobj[item.id] = item.value;
    });

    const errors = {};
    formData.fields.forEach((field) => {
      if (field.id !== "designation" && !myobj[field.id]) {
        errors[field.id] = `${field.label} is required`;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Thank You Form Submitted");
      window.location.reload();
    } else {
      alert("Please fill in all required fields.");
    }

    console.log("myobj", myobj);
  };

  const addField = () => {
    const removedField = removedFields.pop();
    if (removedField) {
      setFields([...fields, removedField]);
      setFormData((prevData) => ({
        ...prevData,
        fields: [...prevData.fields, removedField],
      }));
    }
    if (removed) {
      setRemoved(false);
    }
  };

  const removeField = (id) => {
    const removedField = fields.find((field) => field.id === id);
    setFields(fields.filter((field) => field.id !== id));
    setFormData((prevData) => ({
      ...prevData,
      fields: prevData.fields.filter((field) => field.id !== id),
    }));
    setRemovedFields([...removedFields, removedField]);
    setRemoved(true);
  };

  return (
    <div className=" d-flex justify-content-center mt-5 p-5  ">
      <form onSubmit={handleSubmit}>
        <h2 className="text-info">User Register</h2>
        {fields.map((field) => (
          <div key={field.id}>
            {field.id != "designation" && (
              <div>
                <FormInput
                  field={field}
                  onInputChange={handleInputChange}
                  type="submit"
                  error={formErrors[field.id]}
                />
              </div>
            )}

            {field.id === "address" && (
              <button
                className="btn btn-link text-danger"
                type="button"
                onClick={() => removeField(field.id)}
              >
                I don't wanna Add Address
              </button>
            )}

            {addExtraInfo && field.id === "designation" && (
              <div>
                <FormInput field={field} onInputChange={handleInputChange} />
              </div>
            )}
          </div>
        ))}
        <div>
          {removed === true && (
            <button
              className="btn btn-link text-danger"
              type="button"
              onClick={addField}
            >
              Add My Address
            </button>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default DynamicFormGenerator;
