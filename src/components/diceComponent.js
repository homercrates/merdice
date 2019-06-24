import React, {useState} from 'react';


const DiceComponent = () => {
    const [firstDieResult, setFirstDieResult] = useState(6);
    const [secondDieResult, setSecondDieResult] = useState(6);

    const firstDieImage = require(`../assets/${firstDieResult}.png`);
    const secondDieImage = require(`../assets/${secondDieResult}.png`);

    const rollDice = () => {
        setFirstDieResult(Math.ceil(Math.random() * 6));
        setSecondDieResult(Math.ceil(Math.random() * 6));
    }

    return (
        <div>
            <div style={{ display: 'flex', margin: 20 }}>
                <img src={firstDieImage} className="die" alt="Die one" />
                <img src={secondDieImage} className="die" alt="Die two" />
            </div>
            <span>{firstDieResult + secondDieResult}</span>
            <button className="button" onClick={rollDice}>Roll</button>
        </div>
    )
}

export default DiceComponent;