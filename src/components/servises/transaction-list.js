import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../transaction/transaction-styles.module.css';
import TransInfo from '../transaction/transaction-info';

export default function transactionListRender({ prop }) {
    return prop.map(transaction => (
        <tr key={transaction.id} className={Styled.Tr}>
            <TransInfo transaction={transaction} />
        </tr>
    ));
}

transactionListRender.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ).isRequired,
};
