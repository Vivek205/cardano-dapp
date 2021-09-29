import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    status: {
      danger: string;
    };
  }

  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  export interface Palette {
    customPaletteColor?: string;
  }

  export interface PaletteOptions {
    customPaletteColor?: string;
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#220D3A",
    },
    secondary: {
      main: "#edf2ff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
});
