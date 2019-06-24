import React, {useState, useEffect} from 'react';

import Team1Tiles from './team1tiles'


const team = Team1Tiles();
function RenderTiles() {
    const [currentTile, setCurrentTile] = useState([1,1]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 180000);
        return () => clearInterval(interval);
    }, []);

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
            <p>every 3 minutes this ticks up {timer}</p>
        </div>
    )
}

export default RenderTiles;