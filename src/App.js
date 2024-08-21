import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Add a bot to the army
  const addBotToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release a bot from the army
  const releaseBotFromArmy = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  // Delete a bot from the server and the UI
  const deleteBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE'
    })
      .then(() => setBots(bots.filter(bot => bot.id !== id)))
      .then(() => releaseBotFromArmy(id));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="main-content">
        <BotCollection bots={bots} addBotToArmy={addBotToArmy} deleteBot={deleteBot} />
        <YourBotArmy army={army} releaseBotFromArmy={releaseBotFromArmy} />
      </div>
    </div>
  );
}

export default App;
