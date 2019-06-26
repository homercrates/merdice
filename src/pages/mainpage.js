import React from 'react';

import RenderTiles from '../components/renderTiles';
import RenderChosenTile from '../components/renderChosenTile';
import DiceComponent from '../components/diceComponent';

function MainPage() {
    return (
        <div className="App">
          <h1>
            Mer Dice Pratice round
          </h1>
          <p>
            Below is where I should put some dice stuff 
          </p>


          <RenderTiles />

          <RenderChosenTile />
          <p>the</p>
          <DiceComponent />
        </div>
      );
}

export default MainPage;