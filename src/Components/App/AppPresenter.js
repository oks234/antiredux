import React, { Fragment } from 'react';
import Header from 'Components/Header';
import Flex from 'styled-flex-component';
import Notification from 'Components/Notification';
import Store from 'store';

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notifications).map(key => {
            const notification = store.notifications[key];
            return (
              <Notification
                key={notification.id}
                id={notification.id}
                text={notification.text}
                seen={notification.seen}
              />
            );
          });
        }}
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;
