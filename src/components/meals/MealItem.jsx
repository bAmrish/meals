import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes["meal-item"]}>
      <div className={classes["item-details"]}>
        <div className={classes.name}>{props.meal.name}</div>
        <div className={classes.desc}>{props.meal.description}</div>
        <div className={classes.price}>$ {props.meal.price}</div>
      </div>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
