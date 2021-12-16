import React, { useEffect } from "react";

const Alert = ({ show, msg, type, removeAlert, list }) => {
  // const { show, msg, type } = alert;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      className={`alert ${
        type === "success" ? "alert-success" : "alert-danger"
      }`}
    >
      {msg}
    </p>
  );
};

export default Alert;
