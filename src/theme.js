import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "60px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[600],
          secondary: deepOrange[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: cyan[600],
          secondary: orange[600],
        },
      },
    },
  },
});

export default theme;
