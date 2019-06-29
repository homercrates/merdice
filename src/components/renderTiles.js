import React, { useState } from 'react';


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
    const [advantage1, setAdvantage1] = useState(false);
    const [advantage2, setAdvantage2] = useState(false);
    const [p1Tile, setP1Tile] = useState(true);
    const [p2Tile, setP2Tile] = useState(false);
    const [p1Part, setP1Part] = useState(false);
    const [p2Part, setP2Part] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState();

    let newHand;
    const nextPhase = () => {
        switch (phase) {
            case 1:
                newHand = player1Hand.filter(hand => hand !== currentTile1);
                setPlayer1Hand(newHand);
                setChose(!chose);
                setPhase(2);
                setP2Tile(true);
                setP1Tile(false);
                setCurrentPlayerIs1('player 2');
                break;
            case 2:
                newHand = player2Hand.filter(hand => hand !== currentTile2) 
                setPlayer2Hand(newHand);
                setPhase(3);
                setP2Tile(false);
                setP2Part(true);
                setCurrentPlayerIs1('player 2');
                break;
            case 3:
                setPhase(4);
                setP2Part(false);
                setP1Part(true);
                setCurrentPlayerIs1('player 1');
                break;
            case 4:
                setCurrentPlayerIs1('player 2');
                checkWin();
                setPhase(5);
                setP1Part(false);
                setP2Tile(true);
                setChosenPartTile1(0);
                setChosenPartTile2(0);
                break;
            case 5:
                newHand = player2Hand.filter(hand => hand !== currentTile2);
                setPlayer2Hand(newHand);
                setChose(!chose);
                setPhase(6);
                setP2Tile(false);
                setP1Tile(true);
                setCurrentPlayerIs1('player 1');
                break;
            case 6:
                newHand = player1Hand.filter(hand => hand !== currentTile1) 
                setPlayer1Hand(newHand);
                setPhase(7);
                setP1Tile(false);
                setP1Part(true);
                setCurrentPlayerIs1('player 2');
                break;
            case 7:
                setPhase(8);
                setP1Part(false);
                setP2Part(true);
                setCurrentPlayerIs1('player 2');
                break;
            case 8:
                setCurrentPlayerIs1('player 1');
                checkWin();
                setPhase(1);
                setP2Part(false);
                setP1Tile(true);
                setChosenPartTile1(0);
                setChosenPartTile2(0);
                break;
            default:
                console.log('default');
        }
    }

    const checkWin = () => {
        if (chosenPartTile1 === 1 && chosenPartTile2 === 2 
            || chosenPartTile1 === 2 && chosenPartTile2 === 3
            || chosenPartTile1 === 3 && chosenPartTile2 === 1) {
                if (advantage2) {
                    setGameOver(true);
                    setWinner('player 2');
                    console.log('player 2 wins');
                    console.log('player 2 won the game');
                } else {
                    setAdvantage2(true);
                    setAdvantage1(false);
                    console.log('player 2 won this round');
                }
        } else if (chosenPartTile2 === 1 && chosenPartTile1 === 2 
            || chosenPartTile2 === 2 && chosenPartTile1 === 3
            || chosenPartTile2 === 3 && chosenPartTile1 === 1) {
                if (advantage1) {
                    setGameOver(true);
                    setWinner('player 1');
                    console.log('player 1 wins');
                    console.log('player 1 won the game');
                } else {
                    setAdvantage1(true);
                    setAdvantage2(false);
                    console.log('player 1 won this round');
                    }
        } else {
            console.log('draw match')
        }

    }

    return (
        <div> { gameOver ? <div>{winner} wins.  Refresh browser to play again</div> :
            <table>
                <thead>
                    <tr>
                        <th className={advantage1 ? "outlineAdv" : null}>
                            player 1
                        </th>
                        <th>
                            info
                        </th>
                        <th className={advantage2 ? "outlineAdv" : null}>
                            player2
                        </th>                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={p1Tile ? "outlineMove" : null}>
                            {   
                                player1Hand.map( (tile, index) => {
                                    const tileGrabbed = function() {
                                        return (chose) ? null : setCurrentTile1(tile);
                                    }
                                    const mainTileImg = require(`../assets/${tile[0]}.png`);
                                    const mainTileImg2 = require(`../assets/${tile[1]}.png`);
                                    return (
                                        <div key={index} onClick={tileGrabbed}>
                                            <div>
                                                <img src={mainTileImg} className="tile" alt="Tiles" height="40vh"/> 
                                                <img src={mainTileImg2} className="tile" alt="Tiles" height="40vh"/> 
                                            </div>
                                        </div>
                                    )
                                })
                            
                            }
                        </td>
                        <td>
                            <div>
                                <div className="submitBtn" onClick={nextPhase}>Submit Move</div>
                                <p>current Players turn</p>
                                <p>{currentPlayerIs1} </p>
                            </div>
                        </td>
                        <td className={p2Tile ? "outlineMove" : null}>
                            {   
                                player2Hand.map( (tile, index) => {
                                    const tileGrabbed = function() {
                                        return (chose) ? setCurrentTile2(tile) : null;
                                    }
                                    const mainTileImg = require(`../assets/${tile[0]}.png`);
                                    const mainTileImg2 = require(`../assets/${tile[1]}.png`);
                                    return (
                                        <div key={index} onClick={tileGrabbed}>
                                            <div>
                                            <img src={mainTileImg} className="tile" alt="Tiles" height="40vh"/> 
                                            <img src={mainTileImg2} className="tile" alt="Tiles" height="40vh"/> 
                                            </div>
                                        </div>
                                    )
                                })
                            
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className={p1Part ? "outlineMove" : null}>
                            {
                                currentTile1.map( (tilePart, index) => {
                                    const chosePart = () => {
                                        setChosenPartTile1(tilePart)
                                    }
                                    const chosenPartTile = require(`../assets/${tilePart}.png`);
                                    return (
                                        <div>
                                            <div key={index} onClick={chosePart}>
                                                <img src={chosenPartTile} className="die" alt="Die one" />
                                            </div>
                                        </div>
                                    )         
                                })
                            }
                        </td>
                        <td>
                            <div>
                                
                                {
                                    chosenPartTile1 === 0 ? null : 
                                        <img src={require(`../assets/${chosenPartTile1}.png`)} alt="choice" />
                                },
                                {
                                    chosenPartTile2 === 0 ? null : 
                                    <img src={require(`../assets/${chosenPartTile2}.png`)} alt="choice" />
                                }
                            </div>
                        </td>
                        <td className={p2Part ? "outlineMove" : null}>
                            {
                                currentTile2.map( (tilePart, index) => {
                                    const chosePart = () => {
                                        setChosenPartTile2(tilePart)
                                    }
                                    const chosenPartTile = require(`../assets/${tilePart}.png`);
                                    return (
                                        <div>
                                            <div key={index} onClick={chosePart}>
                                                <img src={chosenPartTile} className="die" alt="Die one" />
                                            </div>
                                        </div>
                                    )         
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        }
        </div>
    )
}


export default RenderTiles;

