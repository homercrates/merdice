import React from 'react';

import Team1Tiles from '../components/team1tiles';
import RenderTiles from '../components/renderTiles';
import RenderChosenTile from '../components/renderChosenTile';

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
              <tr>
                  <td>
                      abcd
                  </td>
                  <td>
                      efgh
                  </td>
              </tr>
            </tbody>
          </table>
          <RenderChosenTile />
        </div>
      );
}

export default MainPage;