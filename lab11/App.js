import React, { useState } from 'react';
import './App.css';

function App() {
  // 狀態變數：點擊次數
  const [clickCount, setClickCount] = useState(0);

  // 點擊時呼叫此函式
  const handleClick = () => {
    setClickCount(clickCount + 1); // 每次點擊 +1
  };

  // 樣式
  const styleArgument = {
    color: 'red',
    fontSize: '64px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1 style={styleArgument} onClick={handleClick}>
        Hello CGU!!{clickCount > 0 ? ` 被點了 ${clickCount} 次` : ''}
      </h1>
    </div>
  );
}

export default App;
