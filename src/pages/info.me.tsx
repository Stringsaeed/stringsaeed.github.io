import React from "react";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { ChevronRight } from "baseui/icon";
import { ListItem, ListItemLabel } from "baseui/list";
import { DisplayMedium, DisplayXSmall } from "baseui/typography";

import { Page, Background } from "@components";

export const InfoMe = () => {
  return (
    <Page>
      <div>
        <Avatar
          name="String Saeed"
          size="scale4800"
          src="https://avatars2.githubusercontent.com/u/37156636?s=460&u=0fbc84dc98c2797a3b2ecac6b4f8663c3d1d1ae9&v=4"
        />
      </div>
      <Background />
      <DisplayMedium>Muhammed Saeed</DisplayMedium>
      <DisplayXSmall>Lead React Native Developer</DisplayXSmall>
      <div style={{ width: 500, boxShadow: "black 5px 5px 0px 0px" }}>
        <ListItem>
          <ListItemLabel>Cairo, Egypt</ListItemLabel>
        </ListItem>
        <ListItem
          endEnhancer={() => (
            <Button size="compact" kind="primary" shape="round">
              <ChevronRight size={25} />
            </Button>
          )}
        >
          <ListItemLabel>+201118784615</ListItemLabel>
        </ListItem>
        <ListItem
          endEnhancer={() => (
            <Button size="compact" kind="primary" shape="round">
              <ChevronRight size={25} />
            </Button>
          )}
        >
          <ListItemLabel>Stringsaeed@gmail.com</ListItemLabel>
        </ListItem>
      </div>
      <div style={{ width: 300, backgroundColor: "white", padding: 5 }}>
        <p style={{ textAlign: "left", writingMode: "sideways-lr" }}>
          Let me speak about myself
        </p>
        <p style={{ textAlign: "left", writingMode: "sideways-lr" }}>
          A computer science graduated who is so passionate about life and
          computers.
        </p>
        <ul>
          <li>2014</li>
          <p>
            I registered to El-Shoroq Academy (SHA) for computer science track
          </p>
        </ul>
      </div>
    </Page>
  );
};
