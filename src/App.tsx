import React from "react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { Grid, Cell } from "baseui/layout-grid";

import { InfoMe, DescriptionMe, ProjectsMe } from "./pages";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Grid>
          <Cell span={[4]}>
            <InfoMe />
          </Cell>
          <Cell span={[4]}>
            <DescriptionMe />
          </Cell>
          <Cell span={[4]}>
            <ProjectsMe />
          </Cell>
        </Grid>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
