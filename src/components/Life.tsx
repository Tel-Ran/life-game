import React, {useEffect, useRef, useState} from 'react';
import LifeMatrix from "../services/LifeMatrix";
import {getRandomMatrix} from "../util/random";
import {DIMENSION, TICK_INTERVAL} from "../config/life-game-config";
import Matrix from "./Matrix";
const Life: React.FC= () => {
    const lifeMatrix = useRef<LifeMatrix>(new LifeMatrix(getRandomMatrix(DIMENSION, DIMENSION,
        0, 1)));
    const [numbers, setNumbers] = useState<number[][]>(lifeMatrix.current.matrix);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setNumbers([...lifeMatrix.current.nextStep()])
        }, TICK_INTERVAL);
        return (() => {
            console.log('end')
            clearInterval(intervalId)
        })
    }, [])
    return (
        <div style={{"display": 'flex',
            "justifyContent":"center",
            "alignItems": "center"}}>
            <Matrix  numbers={numbers}/>
        </div>
    );
}
export default Life;
