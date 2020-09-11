import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../transaction/transaction-styles.module.css';

export default function TransInfo({ transaction }) {
    return (
        <>
            <td className={Styled.Td}>{transaction.type}</td>
            <td className={Styled.Td}>{transaction.amount}</td>
            <td className={Styled.Td}>{transaction.currency}</td>
        </>
    );
}

TransInfo.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};
