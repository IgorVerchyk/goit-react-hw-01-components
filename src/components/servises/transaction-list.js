import React from "react";
import Styled from "../transaction/transaction-styles";

export default function transactionListRender({ prop }) {
  return prop.map((item) => (
    <Styled.Tr key={item.id}>
      <Styled.Td>{item.type}</Styled.Td>
      <Styled.Td>{item.amount}</Styled.Td>
      <Styled.Td>{item.currency}</Styled.Td>
    </Styled.Tr>
  ));
}
