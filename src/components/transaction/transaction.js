import React from "react";
import Styles from "./transaction-styles.module.css";
import PropTypes from "prop-types";

export default function TransactionRender({ children }) {
  return (
    <table className={Styles.Table}>
      <thead className={Styles.Thead}>
        <tr className={Styles.Tr}>
          <th className={Styles.Th}>Type</th>
          <th className={Styles.Th}>Amount</th>
          <th className={Styles.Th}>Currency</th>
        </tr>
      </thead>

      <tbody className={Styles.Tbody}>{children}</tbody>
    </table>
  );
}

TransactionRender.propTypes = {
  children: PropTypes.node.isRequired,
};
