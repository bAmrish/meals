import classes from "./Input.module.css";

const Input = (props) => {
  const className = classes.input + " " + props.className;
  props.input.className = className;
  return <input {...props.input} />;
};
export default Input;
