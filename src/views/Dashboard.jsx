import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import DogView from "views/DogView";
import DropdownView from "views/DropdownView";
import PopupView from "views/PopupView";
import ToggleView from "views/ToggleView";

const ViewWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const View = styled.div`
  height: 100%;
`;

function Dashboard() {
  return (
    <ViewWrapper>
      <View>
        <Switch>
          <Route path="/toggle">
            <ToggleView />
          </Route>
          <Route path="/dropdown">
            <DropdownView />
          </Route>
          <Route path="/popup">
            <PopupView />
          </Route>
          <Route path="/dog">
            <DogView />
          </Route>
          <Redirect to="/toggle" />
        </Switch>
      </View>
      <Sidebar />
    </ViewWrapper>
  );
}

export default Dashboard;
