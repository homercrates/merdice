import React, {useState, useEffect} from 'react';

import Team1Tiles from './team1tiles'


const team = Team1Tiles();

function RenderTiles() {
    const [currentTile, setCurrentTile] = useState([1,1]);
    const [chosenPartTile, setChosenPartTile] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState('player1');
    const [startingPlayer, setStartingPlayer] = useState('player1');
    const [phase, setPhase] = useState(1);

    const [timer, setTimer] = useState(0);

    const nextPhase = () => {    
        (phase < 4) ? setPhase(phase + 1) : setPhase(1);
        console.log(phase);
    }; 




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
            <div>
                <p> current tile</p>
                {
                    currentTile.map( (tilePart, index) => {
                        const chosePart = () => {
                            setChosenPartTile(tilePart)
                            console.log(tilePart);
                        }
                        const chosenPartTile = require(`../assets/${tilePart}.png`);
                        return (
                            <div>
                                <div key={index} onClick={chosePart}>
                                    {tilePart}
                                    <img src={chosenPartTile} className="die" alt="Die one" />
                                </div>
                                <p>Chosen Part</p>
                                {tilePart}
                            </div>
                        )         
                    })
                }
                <div>
                    <p> part of tile chosen: {chosenPartTile}</p>
                    <p>tile chosen: {currentTile}</p>
                    <button className="button" onClick={nextPhase}>Submit Move</button>
                    <p>current phase: {phase}</p>
                </div>
                
            </div>
        </div>
    )
}

export default RenderTiles;