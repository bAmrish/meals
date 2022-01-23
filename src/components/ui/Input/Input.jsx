import classes from "./Input.module.css";

const Input = (props) => {
  const className = props.className
    ? classes.input + " " + props.className
    : classes.input;
  const inputProps = props.input ? props.input : {};
  inputProps.className = className;
  return <input {...inputProps} />;
};
export default Input;
