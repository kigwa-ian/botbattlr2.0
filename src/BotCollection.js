import React from 'react';
import BotCard from './BotCard';
import './BotCollection.css';

function BotCollection({ bots, addBotToArmy, deleteBot }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} deleteBot={deleteBot} />
      ))}
    </div>
  );
}

export default BotCollection;
