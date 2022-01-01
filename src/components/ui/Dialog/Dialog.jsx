import { createContext, useState } from "react";
import classes from "./Dialog.module.css";

const DialogContext = createContext({
  open: () => {},
  close: () => {},
  content: () => {},
});

export const DialogProvider = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const open = (content) => {
    if (content == null) {
      console.warn("No content passed in. Dialog will not open.");
    }
    setDialogContent(content);
    setDialogOpen(true);
  };
  const close = () => {
    setDialogContent(null);
    setDialogOpen(false);
  };

  const backgroundClickHandker = () => {
    setDialogOpen(false);
  };

  const contentClickHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <DialogContext.Provider value={{ open, close }}>
      {dialogOpen && dialogContent && (
        <div className={classes.dialog} onClick={backgroundClickHandker}>
          <div onClick={contentClickHandler}>{dialogContent}</div>
        </div>
      )}
      {props.children}
    </DialogContext.Provider>
  );
};

export default DialogContext;
