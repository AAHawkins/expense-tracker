import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        <i className='fa-solid fa-trash-can'></i>
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default Transaction;
