export default function Input({ id, label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}
