import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../transaction/transaction-styles.module.css';

export default function transactionListRender({ prop }) {
    return prop.map(item => (
        <tr key={item.id} className={Styled.Tr}>
            <td className={Styled.Td}>{item.type}</td>
            <td className={Styled.Td}>{item.amount}</td>
            <td className={Styled.Td}>{item.currency}</td>
        </tr>
    ));
}

transactionListRender.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};
