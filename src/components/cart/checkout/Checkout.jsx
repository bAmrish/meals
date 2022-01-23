import { Button } from "@mui/material";
import { useContext, useRef, useState } from "react";
import cartContext from "../../store/cart-context";
import Card from "../../ui/Card/Card";
import Input from "../../ui/Input/Input";
import classes from "./Checkout.module.css";

const isNotBlank = (value) => value.trim().length > 0;
const postalValid = (value) => value.trim().length >= 5;

const Checkout = () => {
  const cart = useContext(cartContext);
  const totalItems = cart.items.reduce((total, item) => total + item.amount, 0);

  const [error, setError] = useState({
    name: false,
    address1: false,
    postalCode: false,
    city: false,
  });

  const nameRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const checkoutHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const address1 = address1Ref.current.value;
    const address2 = address2Ref.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;

    const nameValid = isNotBlank(name);
    const address1Valid = isNotBlank(address1);
    const postalCodeValid = postalValid(postalCode);
    const cityValid = isNotBlank(city);

    const formValid =
      nameValid && address1Valid && postalCodeValid && cityValid;
    const userData = { name, address1, address2, postalCode, city };
    console.log(userData);

    setError({
      name: !nameValid,
      address1: !address1Valid,
      postalCode: !postalCodeValid,
      city: !cityValid,
    });

    if (!formValid) {
      return;
    }
  };

  const nameControlClasses =
    classes["form-control"] + (error.name ? " " + classes.invalid : "");
  const address1ControlClasses =
    classes["form-control"] + (error.address1 ? " " + classes.invalid : "");
  const postalCodeControlClasses =
    classes["form-control"] + (error.postalCode ? " " + classes.invalid : "");
  const cityControlClasses =
    classes["form-control"] + (error.city ? " " + classes.invalid : "");

  return (
    <Card className={classes.checkout}>
      <h2>Checkout Form</h2>
      <div className={classes["order-details"]}>
        Your are ordering <b> &nbsp;{totalItems}&nbsp;</b> items for&nbsp;
        <b>&nbsp;$ {cart.total.toFixed(2)}</b>.
      </div>
      <form className={classes.form} onSubmit={checkoutHandler}>
        <h4>Enter your details:</h4>
        <div className={nameControlClasses}>
          <label htmlFor="name">Name:</label>
          <Input input={{ id: "name", autoComplete: "off", ref: nameRef }} />
          {error.name && (
            <div className={classes.error}>Please enter valid name</div>
          )}
        </div>
        <div className={address1ControlClasses}>
          <label htmlFor="add1">Address Line 1:</label>
          <Input
            input={{ id: "add1", autoComplete: "off", ref: address1Ref }}
          />
          {error.address1 && (
            <div className={classes.error}>Please enter valid address</div>
          )}
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="add2">Address Line 2:</label>
          <Input
            input={{ id: "add2", autoComplete: "off", ref: address2Ref }}
          />
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal-code">Postal Code:</label>
          <Input
            input={{
              id: "postal-code",
              autoComplete: "off",
              ref: postalCodeRef,
            }}
          />
          {error.postalCode && (
            <div className={classes.error}>
              Please enter valid postal code (min 5 charachters)
            </div>
          )}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City:</label>
          <Input input={{ id: "city", autoComplete: "off", ref: cityRef }} />
          {error.city && (
            <div className={classes.error}>Please enter valid name</div>
          )}
        </div>
        <div className={classes["action-controls"]}>
          <Button variant="contained" type="submit">
            Checkout!
          </Button>
          <Button variant="text">Cancel</Button>
        </div>
      </form>
    </Card>
  );
};

export default Checkout;
