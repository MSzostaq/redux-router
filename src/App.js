import React from "react";
import styled from "styled-components";
// import useInterval from "./hooks/useInterval";
import GlobalProvider from "components/GlobalProvider";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Notifications from "components/Notifications";
import Routes from "components/Routes";

const StyledApp = styled.div`
  height: 100%;
`;

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

function App() {
  // useInterval(() => addNotification(Math.random() < 0.5), 200);

  return (
    <StyledApp>
      <GlobalProvider>
        <ModalsProvider>
          <Routes />
          <AppNotifications />
          <Modals />
        </ModalsProvider>
      </GlobalProvider>
    </StyledApp>
  );
}

export default App;
