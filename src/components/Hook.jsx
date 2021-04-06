import React, { useReducer } from 'react';

const initialState = {count: 10};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container  mx-auto flex flex-wrap items-center justify-between">
      Total : {state.count} 
      <button onClick={() => dispatch({type: 'decrement'})}>Moins</button>
      <button onClick={() => dispatch({type: 'increment'})}>Plus</button>
    </div>
  );
}

export default  Counter;