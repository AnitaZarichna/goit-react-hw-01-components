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
                    {transactions.map(transaction => (
                        <TransactionBodyTr key={transaction.id}>
                            <TransactionBodyTd>{transaction.type}</TransactionBodyTd>
                            <TransactionBodyTd>{transaction.amount}</TransactionBodyTd>
                            <TransactionBodyTd>{transaction.currency}</TransactionBodyTd>
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