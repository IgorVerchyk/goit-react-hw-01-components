import React from "react";
import Styles from "./friends-style";
import PropTypes from "prop-types";

export default function CreateFrendList({ children }) {
  return <Styles.FrendList>{children}</Styles.FrendList>;
}

CreateFrendList.propTypes = {
  children: PropTypes.node.isRequired,
};
