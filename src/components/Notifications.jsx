import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { CLOSE_NOTIFICATION } from "actions/notificationsActions";
import { getNotifications } from "selectors/notificationsSelectors";
import Notification from "./Notification";

const StyledNotifications = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 0;
`;

const StyledNotification = styled(Notification)`
  margin-top: 4px;

  &:first-child {
    margin-top: 0;
  }
`;

const Notifications = ({ className, dispatch, notifications }) => {
  function onCloseButtonClick(notification) {
    const { id } = notification;
    dispatch({ type: CLOSE_NOTIFICATION, payload: { id } });
  }

  return (
    <StyledNotifications className={className}>
      <AnimatePresence initial={false}>
        {notifications.map((notification) => (
          <StyledNotification
            key={notification.id}
            positionTransition
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
            notification={notification}
            onCloseButtonClick={onCloseButtonClick}
          />
        ))}
      </AnimatePresence>
    </StyledNotifications>
  );
};

const mapStateToProps = (state) => ({ notifications: getNotifications(state) });
// const mapStateToProps = ({ notifications }) => ({ notifications });
// ES6

export default connect(mapStateToProps)(Notifications);
