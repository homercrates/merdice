import React from 'react';

import RenderTiles from '../components/renderTiles';
import DiceComponent from '../components/diceComponent';

function MainPage() {
    return (
        <div className="App">
          <h1>
            Dice Fu
          </h1>
          <div className="DiceBoard">
            <RenderTiles />
          </div>
        </div>
      );
}

export default MainPage;