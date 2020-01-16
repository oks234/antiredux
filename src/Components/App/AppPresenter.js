import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification id={1} text={"Hello"} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;