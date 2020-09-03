import React from "react";
import StatStyles from "./statistical-styles";
import PropTypes from "prop-types";

export default function StatRender({ title, children }) {
  return (
    <StatStyles.Statistics>
      {title ? (
        <StatStyles.Title>{title}</StatStyles.Title>
      ) : (
        <StatStyles.Title></StatStyles.Title>
      )}
      <StatStyles.StatList>{children}</StatStyles.StatList>
    </StatStyles.Statistics>
  );
}

StatRender.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
