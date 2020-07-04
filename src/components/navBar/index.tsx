import React, { FC, ReactNode } from "react";
import { Tabs, Tab, Box } from "grommet";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

interface Tab {
    path: string;
    exact: boolean;
    main: () => ReactNode;
    title: string;
}

interface TabBarProps {
    tabsConfig: Tab[];
}

type TabBarType = FC<TabBarProps>;

const TabBar: TabBarType = ({ tabsConfig }) => {
    const history = useHistory();

    return (
        <Tabs gridArea="nav">
            {tabsConfig.map((tab, i) => (
                <Tab
                    onClick={() => history.push(tab.path)}
                    tabIndex={i}
                    title={tab.title}
                >
                    <Box pad="medium">{tab.main()}</Box>
                </Tab>
            ))}
        </Tabs>
    );
};

export default TabBar;
