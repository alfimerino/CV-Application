export const cvSchema = {
  general: {
    title: "General Information",
    fields: [
      { id: "name", label: "Full Name", type: "text" },
      { id: "email", label: "Email", type: "email" },
      { id: "phone", label: "Phone Number", type: "tel" }
    ]
  },
  education: {
    title: "Educational Experience",
    fields: [
      { id: "school", label: "School Name", type: "text" },
      { id: "study", label: "Title of Study", type: "text" },
      { id: "date", label: "Date of Study", type: "date" }
    ]
  },
  experience: {
    title: "Practical Experience",
    fields: [
      { id: "company", label: "Company Name", type: "text" },
      { id: "position", label: "Position Title", type: "text" },
      { id: "responsibilities", label: "Main Responsibilities", type: "textarea" },
      { id: "from", label: "From", type: "date" },
      { id: "until", label: "Until", type: "date" }
    ]
  }
};