import "./style.css";
import { StringCalculator } from "./string-calculator";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  StringCalculator("").toString();
