import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import Input from "../ui/Input/Input";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, price } = props.meal;
  const { amount } = props;
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["item-details"]}>
        <div className={classes.name}>{name}</div>
        <div className={classes.quantity}>
          <div className={classes.price}>$ {price}</div>
          <div className={classes.amount}>
            <Input
              input={{ type: "text", disabled: true, value: `x ${amount}` }}
            />
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button size="small" color="primary" variant="outlined">
          <Remove size="small" sx={{ fontSize: "1rem" }} />
        </Button>
        <Button size="small" color="primary" variant="outlined">
          <Add size="small" sx={{ fontSize: "1rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
