import { Card } from "@mui/material";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <Card variant="elevation" elevation={8} sx={{ borderRadius: "1rem" }}>
        <section>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
      </Card>
    </div>
  );
};

export default MealsSummary;
