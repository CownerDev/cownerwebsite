import { makeStyles } from "@material-ui/core/styles";
import { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const styles = makeStyles({
  Dashboard: { display: "flex", alignContent: "center", justifyContent: "center", height: '100vh' },
  Applogo: {
    height: "40vmin",
    animation: `$Applogospin infinite 20s linear`,
  },
  "@keyframes Applogospin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export default styles;
