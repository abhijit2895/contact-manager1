
const Input = ({
  type,
  id,
  name,
  label,
  placeholder,
  onChange,
  onClick,
  ...props
}) => {
  return (
    <>
      {/* <label htmlFor={id}>{label}</label> */}
      <input
        className="form-control"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        // onClick={onClick}
        {...props}
      />
    </>
  );
};

export default Input;
