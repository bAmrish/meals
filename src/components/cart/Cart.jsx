import Card from "../ui/Card/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import cartContext from "../store/cart-context";
import Checkout from "./checkout/Checkout";
import {
  CheckCircleOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Button, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";

const Cart = (props) => {
  const cartOrders = useContext(cartContext);

  const [checkout, setCheckout] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const orders = cartOrders.items.map((order) => (
    <CartItem key={order.meal.id} meal={order.meal} amount={order.amount} />
  ));

  const orderHandler = () => {
    setCheckout(true);
  };

  const checkoutCloseHandler = () => {
    setCheckout(false);
  };

  const checkoutHandler = async (userData) => {
    console.log({ userData });
    setCheckingOut(true);
    await fetch(
      "https://react-burger-builder-12.firebaseio.com/meals-order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          cart: cartOrders.items,
          total: cartOrders.total,
        }),
      }
    );

    cartOrders.clear();
    setCheckingOut(false);
    setCheckoutSuccess(true);
  };

  let content;

  const cartContent = (
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

  const checkoutConteht = (
    <Checkout onClose={checkoutCloseHandler} onCheckout={checkoutHandler} />
  );

  const checkoutSuccessContet = (
    <Card className={classes["checkout-success"]}>
      <div className={classes["success-message"]}>
        <CheckCircleOutlined sx={{ color: "green", m: 2 }} />
        Checkout Successful!
      </div>
      <div className={classes["success-actions"]}>
        <Button variant="contained" onClick={props.onCartClose}>
          Close
        </Button>
      </div>
    </Card>
  );

  const checkoutLoader = (
    <Card className={classes["checkout-loader"]}>
      <div className={classes["loading-message"]}>
        <ShoppingCartCheckoutOutlined color="primary" sx={{ m: 1 }} />
        Checking out please wait...
      </div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="primary" />
      </Box>
    </Card>
  );

  if (checkingOut) {
    content = checkoutLoader;
  } else if (checkoutSuccess) {
    content = checkoutSuccessContet;
  } else if (checkout) {
    content = checkoutConteht;
  } else {
    content = cartContent;
  }

  return <>{content}</>;
};

export default Cart;
