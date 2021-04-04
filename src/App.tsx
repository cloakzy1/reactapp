import React from 'react';
import TextField from './TextField';

function App() {
  return (
    <div className='App'>
      <TextField
        FirstName='Mohd'
        LastName='Anzar'
        Age={12}
        changeMinus={(set, setCount) => {
          setCount(set - 1);
        }}
        changePlus={(set, setCount) => {
          setCount(set + 1);
        }}
      />
    </div>
  );
}

export default App;
