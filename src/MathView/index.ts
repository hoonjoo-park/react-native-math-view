import { Platform } from "react-native";

let MathView;
if (Platform.OS === "ios") {
  MathView = require("./index.ios").default;
} else {
  MathView = require("./index.android").default;
}

export default MathView;
