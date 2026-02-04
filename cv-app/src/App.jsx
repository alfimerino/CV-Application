import { useState } from "react";
import { cvSchema } from "./assets/cvSchema";
import "./App.css";
import Form from "./Form";
function App() {
  const [cvData, setCvData] = useState({
    general: {},
    education: {},
    experience: {},
  });

  const handleChange = (sectionKey, e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [sectionKey]: {
        ...prevData[sectionKey],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitting CV data:", cvData);

  // Simulate API call
  setTimeout(() => {
    console.log("✅ Data successfully submitted to API!");
  }, 1000);
};

  return (
    <>
      <h1>CV Maker</h1>
      <div>
      {Object.keys(cvSchema).map((key)=> (
        <Form
          sectionKey={key}
          config={cvSchema[key]}
          data={cvData[key]}
          onChange={handleChange}
        />
      ))}
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <span> </span>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
