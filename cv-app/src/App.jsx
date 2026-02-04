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
  // Takes a section key ("general", "education", "experience") and input event
  const handleChange = (sectionKey, e) => {
    // Destructures the input element to get name and value
    // name = the input's name attribute (e.g., "email", "phone")
    // value = what the user typed
    const { name, value } = e.target;
    
    // Updates state immutably - creates new object instead of mutating
    setCvData((prevData) => ({
      // Spread keeps all existing sections unchanged
      ...prevData,
      
      // [sectionKey] uses the variable value as the key (computed property)
      // If sectionKey="general", this becomes: general: {...}
      [sectionKey]: {
        // Spread keeps existing fields in this section
        ...prevData[sectionKey],
        // [name] uses the input's name as the key
        // If name="email", this becomes: email: "user@example.com"
        [name]: value,
      },
    }));
  };
  
  // Example: User types "John" in the name field of general section
  // sectionKey = "general", name = "name", value = "John"
  // Result: cvData.general.name = "John" (other data preserved)

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
