import { useState } from "react";
import "./App.css";
import { initialData } from "./data/initialData";
import DynamicFormGenerator from "./form/DynamicFormGenerator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState(initialData);

  return (
    <div>
      <DynamicFormGenerator formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
