import React from "react";
import Styled from "../transaction/transaction-styles.module.css";

export default function transactionListRender({ prop }) {
  return prop.map((item) => (
    <tr key={item.id} className={Styled.Tr}>
      <td className={Styled.Td}>{item.type}</td>
      <td className={Styled.Td}>{item.amount}</td>
      <td className={Styled.Td}>{item.currency}</td>
    </tr>
  ));
}
