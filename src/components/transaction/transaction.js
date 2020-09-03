import React from "react";
import Styles from "./transaction-styles";
import PropTypes from "prop-types";

export default function TransactionRender({ children }) {
  return (
    <Styles.Table>
      <Styles.Thead>
        <Styles.Tr>
          <Styles.Th>Type</Styles.Th>
          <Styles.Th>Amount</Styles.Th>
          <Styles.Th>Currency</Styles.Th>
        </Styles.Tr>
      </Styles.Thead>
      <Styles.Tbody>{children}</Styles.Tbody>
    </Styles.Table>
  );
}

TransactionRender.propTypes = {
  children: PropTypes.node.isRequired,
};
