import React, { useState, useCallback, useMemo } from 'react';

const AddNumbers = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [count, setCount] = useState(0); // Dummy state to force re-renders

  console.log('🔄 Component rendered');

  // useCallback: memoize the function
  const addNumbersWithCallback = useCallback(() => {
    console.log('🧠 useCallback: addNumbersWithCallback executed');
    return a + b;
  }, [a, b]);

  // useMemo: memoize the value
  const resultWithMemo = useMemo(() => {
    console.log('🧠 useMemo: resultWithMemo computed');
    return a + b;
  }, [a, b]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useCallback vs useMemo</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        placeholder="Enter A"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        placeholder="Enter B"
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => alert(addNumbersWithCallback())}>
          ➕ Add using useCallback
        </button>
        <p>🧮 Result with useMemo: {resultWithMemo}</p>
      </div>

      <button onClick={() => setCount((prev) => prev + 1)}>
        🔁 Re-render (count: {count})
      </button>
    </div>
  );
};

export default AddNumbers;