import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/deepOrange";
import cyan from "@mui/material/colors/cyan";
import "./App.css";
import Header from "./components/layouts/Header";
import Meals from "./components/meals/Meals";
import { DialogProvider } from "./components/ui/Dialog/Dialog";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: orange,
      secondary: cyan,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>
          <div className="App">
            <DialogProvider>
              <Header />
              <Meals />
            </DialogProvider>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
