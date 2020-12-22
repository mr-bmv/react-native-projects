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
        navbar: "#073642",
        mainText: "#839496",
        input: "#a9bdbd",
        inputText: "#495057"
    },
    light: {
        // base colors
        primary: "#158cba",
        secondary: "#f0f0f0",
        success: "#28b62c",
        info: "#75caeb",
        warning: "#ff851b",

        // colors
        backgroundColor: "#158cba",
        // backgroundColor: "#FFF",
        backgroundColorLight: "#FFF",
        navbar: "#f0f0f0",
        // backgroundColorLight: "#158cba",
        mainText: "#222",
        input: "#f0f0f0"
    }
};

export const width = Dimensions.get("window").width;

export const height = Dimensions.get("window").height;