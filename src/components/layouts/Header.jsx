import { AppBar, Toolbar, Typography } from "@mui/material";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/images/meals.jpg";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Meals</Typography>
          <HeaderCartButton />
        </Toolbar>
      </AppBar>
      <div className={classes["header-image"]}>
        <img alt="" src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
