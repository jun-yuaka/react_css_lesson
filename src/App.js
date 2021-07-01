import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledCompornents } from "./components/StyledCompornents";
import "./styles.css";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledCompornents />
      <Emotion />
    </div>
  );
}
