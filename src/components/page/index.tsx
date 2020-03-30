import * as React from "react";
import { FC } from "react";
import "./page.css";

type PageType = FC<{}>;

export const Page: PageType = ({ children }) => {
  return <div className="Page">{children}</div>;
};
