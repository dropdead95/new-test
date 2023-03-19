import React from "react";
import classNames from "classnames";

import styles from "./MenuButton.module.scss";

export const MenuButton = ({ title, className, children }) => {
  return (
    <button className={classNames(styles.button, className)}>
      <p>{title}</p>
      {children}
    </button>
  );
};
