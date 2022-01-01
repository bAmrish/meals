import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Input from "../ui/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <div className={classes.form}>
      <div className={classes["input-row"]}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Amount
        </Typography>
        <Input input={{ type: "number", defaultValue: 1 }} />
      </div>
      <div className={classes["action-row"]}>
        <Button
          sx={{ lineHeight: 1, borderRadius: "2rem" }}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Add />}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default MealItemForm;
