import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
  const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);

  const onChangeBudgetHandler = (event) => {
    const enteredValue = Number(event.target.value);

    if (enteredValue < totalExpenses) {
      alert(
        "You cannot reduce the budget value lower than the spending"
      );
    } else {
      if (enteredValue > BUDGET_MAX_VALUE) {
        alert('Please enter a value less that ' + BUDGET_MAX_VALUE);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
      });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
