import React from 'react';
import AddDates from './components/AddDates';
import CurrentVacations from './components/CurrentVacations';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="AddDatesView">
          <AddDates />
        </div>

        <div id="CurrentVacationsView">
        <CurrentVacations />
        </div>
      </header>
    </div>
  );
}

export default App;
