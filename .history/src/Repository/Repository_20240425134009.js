/** @format */

import { Store } from "react-notifications-component";

export const showNotification = ({ type, message }) => {
  Store.addNotification({
    title: "",
    message
    type ,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
