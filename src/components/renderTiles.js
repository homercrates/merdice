import React, {useState, useEffect} from 'react';


function RenderTiles() {
    const [player1Hand, setPlayer1Hand] = useState([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
    const [player2Hand, setPlayer2Hand] = useState([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
    const [currentTile1, setCurrentTile1] = useState([1,1]);
    const [currentTile2, setCurrentTile2] = useState([1,1]);
    const [chosenPartTile1, setChosenPartTile1] = useState(0);
    const [chosenPartTile2, setChosenPartTile2] = useState(0);
    const [currentPlayerIs1, setCurrentPlayerIs1] = useState('player 1');
    const [phase, setPhase] = useState(1);
    const [chose, setChose] = useState(false);

    let newHand;
    const nextPhase = () => {
        switch (phase) {
            case 1:
                newHand = player1Hand.filter(hand => hand !== currentTile1);
                setPlayer1Hand(newHand);
                setChose(!chose);
                setPhase(2);
                setCurrentPlayerIs1('player 2');
                break;
            case 2:
                newHand = player2Hand.filter(hand => hand !== currentTile2) 
                setPlayer2Hand(newHand);
                setPhase(3);
                setCurrentPlayerIs1('player 2');
                break;
            case 3:
                setPhase(4);
                setCurrentPlayerIs1('player 1');
                break;
            case 4:
                setCurrentPlayerIs1('player 2');
                checkWin();
                setPhase(5);
                break;
            case 5:
                newHand = player2Hand.filter(hand => hand !== currentTile2);
                setPlayer2Hand(newHand);
                setChose(!chose);
                setPhase(6);
                setCurrentPlayerIs1('player 1');
                break;
            case 6:
                newHand = player1Hand.filter(hand => hand !== currentTile1) 
                setPlayer1Hand(newHand);
                setPhase(7);
                setCurrentPlayerIs1('player 2');
                break;
            case 7:
                setPhase(8);
                setCurrentPlayerIs1('player 2');
                break;
            case 8:
                setCurrentPlayerIs1('player 1');
                checkWin();
                setPhase(1);
                break;
            default:
                console.log('default');
        }
    }

    const checkWin = () => {
        return (chosenPartTile1 === 1 && chosenPartTile2 === 2 
            || chosenPartTile1 === 2 && chosenPartTile2 === 3
            || chosenPartTile1 === 3 && chosenPartTile2 === 1) 
            ? 
                console.log('player 2 wins') 
            : 
            (chosenPartTile2 === 1 && chosenPartTile1 === 2 
                || chosenPartTile2 === 2 && chosenPartTile1 === 3
                || chosenPartTile2 === 3 && chosenPartTile1 === 1) 
                ?
                    console.log('player 1 wins')
                :
                    console.log('its a tie');
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            player 1
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            player2
                        </th>                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {   
                                player1Hand.map( (tile, index) => {
                                    const tileGrabbed = function() {
                                        return (chose) ? null : setCurrentTile1(tile);
                                        //setCurrentTile1(tile);
                                    }
                                    return (
                                        <div key={index} onClick={tileGrabbed}>
                                            <p>{tile}</p>
                                        </div>
                                    )
                                })
                            
                            }
                        </td>
                        <td>
                            {   
                                player2Hand.map( (tile, index) => {
                                    const tileGrabbed = function() {
                                        return (chose) ? setCurrentTile2(tile) : null;
                                        //setCurrentTile2(tile);
                                    }
                                    return (
                                        <div key={index} onClick={tileGrabbed}>
                                            <p>{tile}</p>
                                        </div>
                                    )
                                })
                            
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p> current tile {currentTile1}</p>
                            {
                                currentTile1.map( (tilePart, index) => {
                                    const chosePart = () => {
                                        setChosenPartTile1(tilePart)
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
                        </td>
                        <td>
                            <p> current tile {currentTile2}</p>
                            {
                                currentTile2.map( (tilePart, index) => {
                                    const chosePart = () => {
                                        setChosenPartTile2(tilePart)
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
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>

                <div>
                    <p> player 1 Move: {chosenPartTile1}</p>
                    <p> player 2 Move: {chosenPartTile2}</p>
                    <button className="button" onClick={nextPhase}>Submit Move</button>
                    <p>current phase: {phase}</p>
                    <p>current Players turn: {currentPlayerIs1} </p>
                </div>
                
            </div>
        </div>
    )
}

export default RenderTiles;