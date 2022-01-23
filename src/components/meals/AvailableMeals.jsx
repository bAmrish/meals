import { useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(
          "https://react-burger-builder-12.firebaseio.com/available-meals.json"
        );

        const mealsObject = await response.json();
        const mealsMenu = [];
        for (const id in mealsObject) {
          const meal = mealsObject[id];
          mealsMenu.push({ id, ...meal });
        }
        setAvailableMeals(mealsMenu);
      } catch (e) {
        setError("Something went wrong.");
      }
      setLoading(false);
    })();
  }, []);

  let content;

  const meals = availableMeals.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  if (error) {
    content = <p>{error}</p>;
  } else if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = meals;
  }

  return (
    <Card className={classes["available-meals"]}>
      <div>{content}</div>
    </Card>
  );
};

export default AvailableMeals;
