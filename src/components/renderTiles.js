import React, {useState, useEffect} from 'react';


function RenderTiles() {
    const [player1Hand, setPlayer1Hand] = useState([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
    const [player2Hand, setPlayer2Hand] = useState([1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]);
    const [currentTile, setCurrentTile] = useState([1,1]);
    const [chosenPartTile, setChosenPartTile] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState('player1');
    const [startingPlayer, setStartingPlayer] = useState('player1');
    const [phase, setPhase] = useState(1);

    const [timer, setTimer] = useState(0);

    const nextPhase = () => {    
        (phase < 4) 
            ? setPhase(phase + 1) 
            : newRound();
        console.log(phase);
    };

    const newRound = () => {
        setPhase(1);
        startingPlayer == 'player1' 
            ? setStartingPlayer('player2') 
            : setStartingPlayer('player1');
        console.log('this is currentTile id' + currentTile);
        adding();
        //setPlayer1Hand(...player1Hand)
        // left off here  trying to get it to filter out the current tile so i can delete the used tile
        // invovled wit addin()  maybe what i want is a switch satement here
        // look into a switch statement
    }

    const adding = () => {
        let newHand = '';
        return (
           player1Hand.filter(newHand => newHand.id !== currentTile),
           console.log('cuurent tile tp pull:' + currentTile),
           console.log('hand:' + player1Hand),
           console.log(newHand)
           // trying to get a point where i ca filter out a target
        ) 
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 180000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {   
                player1Hand.map( (tile, index) => {
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
                    <p>current starting player: {startingPlayer}</p>
                </div>
                
            </div>
        </div>
    )
}

export default RenderTiles;