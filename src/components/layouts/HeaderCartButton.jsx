import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ShoppingCartIcon />}
    >
      Your Cart
      <span className={classes["total-items"]}>3</span>
    </Button>
  );
};

export default HeaderCartButton;
