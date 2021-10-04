import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "snet-ui/Header";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Tabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import { useHistory } from "react-router";
import { Box } from "@mui/system";

const ComponentContainer = styled(Paper)`
  padding: 0 30px 0px 30px;
`;

const TabsContainer = styled(Paper)`
  margin: 10px;
`;

const Tab = styled(MuiTab)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

enum tabEnum {
  FAQ,
  TERMS_OF_SERVICE,
}

const tabPath: { [key in tabEnum]: string } = {
  [tabEnum.FAQ]: "/faq",
  [tabEnum.TERMS_OF_SERVICE]: "/termsofservice",
};

const tabLabel: { [key in tabEnum]: string } = {
  [tabEnum.FAQ]: "FAQ",
  [tabEnum.TERMS_OF_SERVICE]: "Terms of Service",
};

export default function MainTabLayout({ children }: PropsWithChildren<any>) {
  const [activeTab, setActiveTab] = useState(tabEnum.FAQ);
  const history = useHistory();

  const currentPath = history.location.pathname;

  useEffect(() => {
    console.log("currentPath", currentPath);
    const activeTabUrl = Object.entries(tabPath).find(([, value]) => value === currentPath);
    if (activeTabUrl) {
      setActiveTab(Number(activeTabUrl[0]));
    }
  }, [currentPath]);

  const handleChange = (_event: React.SyntheticEvent, newValue: tabEnum) => {
    const nextURL = tabPath[newValue];
    history.push(nextURL);
  };
  return (
    <div>
      <Header fixHeader={true} />
      <Box sx={{ paddingTop: "100px" }} />
      <TabsContainer elevation={4}>
        <Tabs value={activeTab} onChange={handleChange} textColor="primary">
          <Tab value={tabEnum.FAQ} label={tabLabel[tabEnum.FAQ]} color="secondary" />
          <Tab value={tabEnum.TERMS_OF_SERVICE} label={tabLabel[tabEnum.TERMS_OF_SERVICE]} color="primary" />
        </Tabs>
      </TabsContainer>
      <ComponentContainer elevation={0}>{children}</ComponentContainer>
    </div>
  );
}
