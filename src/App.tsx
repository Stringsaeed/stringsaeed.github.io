import React, { useEffect } from "react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import { InfoMe } from "./pages";
import { Page } from "./components";

const engine = new Styletron();
function App() {
  useEffect(() => {
    document.title = "Stringsaeed";
  }, []);
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <InfoMe />
          <Page />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
