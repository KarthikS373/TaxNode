import { border, ThemeComponents } from "@chakra-ui/react";

const Button: ThemeComponents["Button"] = {
  baseStyle: {
  },
  variants: {
    primary: {
      bgColor: "black",
      color: "white",
      boxShadow: "none",
      borderRadius: 0,
      _hover: {
        bgColor: "white",
        color: "black",
        boxShadow: "2xl",
      },
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.6)",
      borderWidth: 1,
      borderColor: "#E5E5E5",
      borderStyle: "solid",
      backdropFilter: "blur(5px)",
      borderRadius: 16,
      boxShadow: "none",
      color:'primary', 
      _hover: {
        background: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
