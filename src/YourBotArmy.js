import React from 'react';
import './YourBotArmy.css';

function YourBotArmy({ army, releaseBotFromArmy }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="bot-in-army">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBotFromArmy(bot.id)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
