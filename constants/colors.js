import { Dimensions } from "react-native";

export const COLORS = {
    dark: {
        // base colors
        primary: "#b58900",
        secondary: "#839496",
        success: "#2aa198",
        info: "#268bd2",
        warning: "#cb4b16",

        // colors
        backgroundColor: "#002b36",
        backgroundColorLight: "#073642",
        mainText: "#839496",
        input: "#a9bdbd"
    },
    light: {}
};

export const width = Dimensions.get("window").width;

export const height = Dimensions.get("window").height;