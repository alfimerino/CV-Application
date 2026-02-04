import Input from "./components/Input";
import Section from "./components/Section";
export default function Form({sectionKey, config, data, onChange }) {
  const { title, fields } = config;
  return (
    <>
        <Section sectionKey={sectionKey} title={title} fields={fields} data={data} onChange={onChange}/>
    </>
  );
}
