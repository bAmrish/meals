import Card from "../ui/Card/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const DUMMY_ORDER = [
  {
    meal: {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    amount: 1,
  },
  {
    meal: {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    amount: 4,
  },
];
const Cart = () => {
  const orders = DUMMY_ORDER.map((order) => (
    <CartItem key={order.meal.id} meal={order.meal} amount={order.amount} />
  ));
  return (
    <div className={classes.cart}>
      <Card>
        <div>{orders}</div>
        <div className={classes.total}>
          <div className={classes["total-text"]}>Total Amount</div>
          <div className={classes["total-amount"]}>$72.42</div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Close</button>
          <button className={`${classes.button} ${classes.filled}`}>
            Order
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
