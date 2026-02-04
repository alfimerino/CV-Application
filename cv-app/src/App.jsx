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
        <button>Submit</button>
        <span> </span>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
