import React from 'react';
import './BotCard.css';

function BotCard({ bot, addBotToArmy, deleteBot }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => addBotToArmy(bot)}>Enlist</button>
      <button onClick={() => deleteBot(bot.id)}>Delete</button>
    </div>
  );
}

export default BotCard;
