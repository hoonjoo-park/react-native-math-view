import React from "react";
import MathText, { MathTextProps } from "../MathText";
import MathView from "./SvgXml";

const MathTextFallback = React.memo((props: MathTextProps) => (
  <MathText {...props} Component={MathView} />
));

export const Constants = {};
export * from "../MathText";
export type { MathViewProps } from "../common";
export { default as MathjaxFactory } from "../mathjax";
export { MathView as default, MathTextFallback as MathText };
