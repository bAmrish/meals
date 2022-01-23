import { createContext, useEffect, useState } from "react";

// noinspection JSUnusedLocalSymbols
const cartContext = createContext({
  items: [],
  total: 0,
  addMeal: (meal) => {},
  removeMeal: (meal) => {},
  removeItem: (id) => {},
  clear: () => {},
});

export default cartContext;

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = items.reduce((total, item) => {
      return total + item.meal.price * item.amount;
    }, 0);
    setTotal(totalAmount);
  }, [items]);

  const addMeal = (meal, amount) => {
    setItems((prevItems) => {
      const items = [...prevItems];

      let item = items.find((item) => item.meal.id === meal.id);
      if (item) {
        item.amount += amount;
      } else {
        items.push({ meal, amount });
      }

      return items;
    });
  };

  const removeMeal = (meal) => {
    setItems((prevItems) => {
      const items = [...prevItems];

      let index = items.findIndex((item) => item.meal.id === meal.id);

      if (index > -1) {
        let item = { ...items[index] };
        item.amount -= 1;
        if (item.amount <= 0) {
          items.splice(index, 1);
        } else {
          items[index] = item;
        }
      }
      return items;
    });
  };

  const removeItem = (id) => {
    setItems((prevItems) => {
      const items = [...prevItems];

      let index = items.findIndex((item) => (item.meal.id = id));
      if (index > -1) {
        items.splice(index, 1);
      }

      return items;
    });
  };

  const clear = () => {
    setItems([]);
    setTotal(0);
  };

  const cartContextValue = {
    items,
    total,
    addMeal,
    removeMeal,
    removeItem,
    clear,
  };

  return (
    <cartContext.Provider value={cartContextValue}>
      {props.children}
    </cartContext.Provider>
  );
};
