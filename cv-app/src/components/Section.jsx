import Input from "./Input";
export default function Section({ sectionKey, title, fields, data, onChange }) {
  return (
    <>
      <h2>{title}</h2>
      <div>
        {fields.map((field) => (
          <Input
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          value={data[field.id] || ""}
          onChange={(e)=> onChange(sectionKey, e)}
          />
        ))}
        <br />
      </div>
    </>
  );
}
