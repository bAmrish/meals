import Card from "../ui/Card/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import cartContext from "../store/cart-context";
import DialogContext from "../ui/Dialog/Dialog";
import Checkout from "./checkout/Checkout";

const Cart = (props) => {
  const cartOrders = useContext(cartContext);
  const dialog = useContext(DialogContext);
  const orders = cartOrders.items.map((order) => (
    <CartItem key={order.meal.id} meal={order.meal} amount={order.amount} />
  ));
  const orderHandler = () => {
    dialog.open(<Checkout />);
  };
  return (
    <div className={classes.cart}>
      <Card>
        <div>{orders}</div>
        <div className={classes.total}>
          <div className={classes["total-text"]}>Total Amount</div>
          <div className={classes["total-amount"]}>
            ${cartOrders.total.toFixed(2)}
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onCartClose}>
            Close
          </button>
          <button
            className={`${classes.button} ${classes.filled}`}
            disabled={!cartOrders.items.length}
            onClick={orderHandler}
          >
            Order
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
