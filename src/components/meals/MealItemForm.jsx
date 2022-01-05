import {Add} from "@mui/icons-material";
import {Button, Typography} from "@mui/material";
import Input from "../ui/Input/Input";
import classes from "./MealItemForm.module.css";
import {useContext, useState} from "react";
import cartContext from "../store/cart-context";

const MealItemForm = (props) => {
  const cart = useContext(cartContext);
  const [amount, setAmount] = useState(1);
  const inputChangeHandler = (event) => {
    setAmount(event.target.value);
  }
  const addMealHandler = () => {
    cart.addMeal(props.meal, +amount)
  }
  return (
    <div className={classes.form}>
      <div className={classes["input-row"]}>
        <Typography variant="body2" sx={{fontWeight: "bold"}}>
          Amount
        </Typography>
        <Input input={{type: "number", min: 1, max: 5, value: amount, onChange: inputChangeHandler}} />
      </div>
      <div className={classes["action-row"]}>
        <Button
          sx={{lineHeight: 1, borderRadius: "2rem"}}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Add/>}
          onClick={addMealHandler}
        >
          Add
        </Button>
      </div>
    </div>
  )
    ;
};

export default MealItemForm;
