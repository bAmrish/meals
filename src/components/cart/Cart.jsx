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
      <Card>{orders}</Card>
    </div>
  );
};

export default Cart;
