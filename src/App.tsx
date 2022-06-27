import React, { useState} from 'react';

function App() {
  const [item, setItem] =useState(['Bruno', 'Fernando', 'Tchalla']);

  const addItem = () => {
    setItem((oldValue) => [...oldValue, "Novo"]);
  }

  return (
    <div >
     
     <button onClick={addItem}>Adicionar</button>
      <ul>
        {item.map( e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  );
}

export default App;
