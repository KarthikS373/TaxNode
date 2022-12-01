import { border, ThemeComponents } from "@chakra-ui/react";

const Button: ThemeComponents["Button"] = {
  baseStyle: {},
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
      color: "primary",
      _hover: {
        background: "rgba(255, 255, 255, 0.9)",
      },
    },
    tertiary: {
      background: "purple",
      borderWidth: 0,
      borderColor: "purple",
      borderStyle: "solid",
      backdropFilter: "blur(5px)",
      borderRadius: 4,
      boxShadow: "none",
      color: "white",
      _hover: {
        background: "white",
        color:'purple',
        boxShadow:'xl'
      },
    },
    gradient: {
      background: "linear-gradient(90deg, #8E2DE2 0.19%, #4A00E0 99.81%);",
      borderRadius: 4,
      boxShadow: "none",
      color: "white",
      _hover: {
        boxShadow: "sm",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
