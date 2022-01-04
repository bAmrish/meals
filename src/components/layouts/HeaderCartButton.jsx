import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import DialogContext from "../ui/Dialog/Dialog";
import Cart from "../cart/Cart";

const HeaderCartButton = () => {
  const dialog = useContext(DialogContext);
  const cartCloseHandler = () => {
    dialog.close();
  }
  const orderHandler = () => {
    dialog.open(<Cart onCartClose={cartCloseHandler} />);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ShoppingCartIcon />}
      onClick={orderHandler}
    >
      Your Cart
      <span className={classes["total-items"]}>3</span>
    </Button>
  );
};

export default HeaderCartButton;
