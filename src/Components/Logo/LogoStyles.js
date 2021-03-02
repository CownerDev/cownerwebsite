import { makeStyles } from "@material-ui/core/styles";

const styles = () => {
  const style = makeStyles({
    Applogo: {
      "&:hover": {
        animation: `$Applogospin infinite 2s linear`,
      },
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
  return style;
};

export default styles;
