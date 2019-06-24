import React, {useState} from 'react';

import Team1Tiles from './team1tiles'


const team = Team1Tiles();
function RenderTiles() {
    const [currentTile, setCurrentTile] = useState([1,1]);

    return (
        <div>
            {   
                team.map( (tile, index) => {
                    const tileGrabbed = function() {
                        setCurrentTile(tile);
                    }
                    return (
                        <div key={index} onClick={tileGrabbed}>
                            <p>{tile}</p>
                        </div>
                    )
                })
            
            }
            <p>{currentTile}</p>
        </div>
    )
}

export default RenderTiles;