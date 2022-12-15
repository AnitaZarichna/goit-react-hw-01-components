import PropTypes from 'prop-types';
import {Transaction,TransactionTable,TransactionHead,TransactionTr,TransactionBody,TransactionBodyTd,TransactionBodyTr} from './TransactionHistory.styled';
 
export function TransactionHistory ({ transactions }) {
    return (
        <Transaction>
            <TransactionTable>
                <TransactionHead>
                    <TransactionTr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </TransactionTr>
                    </TransactionHead>
                    <TransactionBody>
                    {transactions.map(({id, type, amount,currency}) => (
                        <TransactionBodyTr key={id}>
                            <TransactionBodyTd>{type}</TransactionBodyTd>
                            <TransactionBodyTd>{amount}</TransactionBodyTd>
                            <TransactionBodyTd>{currency}</TransactionBodyTd>
                        </TransactionBodyTr>
                    ))}
                    </TransactionBody>
            </TransactionTable>
        </Transaction>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};