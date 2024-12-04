import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div className="Task">
      <header className="AddTask">
        <button className="Login" onClick={togglePopup}>
          Add Task
        </button>
      </header>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Task</h3>
            <p>Enter task and due date</p>
            <form>
              <label>
                <input type="text" placeholder="Task Name" />
              </label>
              <br />
              <label>
                <input type="date" placeholder="Due Date" />
              </label>
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
            <br />
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
