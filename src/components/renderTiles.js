import React from 'react';

import Team1Tiles from './team1tiles'


const team = Team1Tiles();
function RenderTiles() {

    return (
        <div>
            {   
                team.map( (tile, index) => {
                    const tileGrabbed = function() {
                        console.log(tile[1]);
                    }
                    return (
                        <div key={index} onClick={tileGrabbed}>
                            <p>{tile}</p>
                        </div>
                    )
                })
            
            }
        </div>
    )
}

export default RenderTiles;