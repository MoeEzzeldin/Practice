import { useState } from 'react';
import './App.css';
import Entry from './components/Entry';
import data from './data'; // Assuming you have a data file with your entries

function App() {
  const [name, setName] = useState("");
  
  return (
    <div className="app-container">
      <header>
        <h1>My Travel Journal</h1>
        <div className="name-input-container">
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
          />
          <p>Hello, {name || "traveler"}</p>
        </div>
      </header>
      
      {/* This div with the entries-container class will create the 2-column grid */}
      <div className="entries-container">
        {data.map(entry => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default App;
