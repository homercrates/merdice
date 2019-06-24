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

          <table>
            <tbody>
              <tr>
                <th>
                  Team 1
                </th>
                <th>
                  Team 2
                </th>
              </tr>
              <tr>
                <td>
                   <RenderTiles />
                </td>
                <td>
                  4 5 6 8 9 10 11 12
                </td>
              </tr>
            </tbody>
          </table>
          <RenderChosenTile />
          <p>the</p>
          <DiceComponent />
        </div>
      );
}

export default MainPage;