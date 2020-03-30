import * as React from "react";
import { HeadingLarge } from "baseui/typography";

export const DescriptionMe = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderStyle: "dashed",
        height: "99vh",
        zIndex: 500,
        marginBottom: 10,
        boxShadow: "black 10px 10px 30px 5px"
      }}
    >
      <div style={{ borderBottomStyle: "dashed" }}>
        <HeadingLarge>About</HeadingLarge>
      </div>
    </div>
  );
};
