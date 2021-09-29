import "./App.css";
import AppRouter from "Router";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "snet-ui/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
