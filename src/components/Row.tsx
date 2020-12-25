import React, {useEffect, useState} from "react";
import {DIMENSION, SPACING} from "../config/life-game-config";
import {useSelector} from "react-redux";
import {ReducersType} from "../redux/store";
type Props = {
    row: number[];

}
const Row:React.FC<Props> = (props) => {
    const {row} = props
    const count: number = useSelector<ReducersType, number>(state => state.count);

    const width = useSelector<ReducersType, number>(state => state.width);

    function getSize(): number {
        return (Math.min(window.innerHeight, width) - SPACING * 2) / DIMENSION /
            count - 2
    }

    function getStyle(num: number): object {
        const size = getSize();
        return {
            backgroundColor: num ? 'black':'white',
            width: size,
            height: size,
            border: "solid 1px gray"
        };
    }

    function getRow(): JSX.Element[] {
        return props.row.map((num, index) =>
        <div style={getStyle(num)} key={index.toString()}/>)
    }

    return <div style={{display:'flex'}}>
        {getRow()}
    </div>
}
export default Row;
