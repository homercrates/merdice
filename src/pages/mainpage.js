import React from 'react';

import RenderTiles from '../components/renderTiles';


function MainPage() {
    return (
        <div className="App">
          <h1>
            Dice Fu <img src={require(`../assets/1.png`)} className="tile" alt="fist" height="40vh"/> 
            > <img src={require(`../assets/2.png`)} className="tile" alt="fist" height="40vh"/> 
            > <img src={require(`../assets/3.png`)} className="tile" alt="fist" height="40vh"/> 
            > <img src={require(`../assets/1.png`)} className="tile" alt="fist" height="40vh"/> 
          </h1>
          <div className="DiceBoard">
            <RenderTiles />
          </div>
        </div>
      );
}

export default MainPage;