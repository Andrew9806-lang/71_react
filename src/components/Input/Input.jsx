import "./styles.css";

function Input1({ name, type, placeholder, label }) {
  return (
    <div className="form-wrapper">
      <label htmlFor={name}>
        {label}
        <input id={name}
         name={name}
          type={type} 
          placeholder={placeholder} />
      </label>
    </div>
  );
}

export default Input1;