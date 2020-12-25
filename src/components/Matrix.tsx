import React from "react";
import Row from "./Row";
import {SPACING} from "../config/life-game-config";
type Props = {
    numbers: number[][];

}
const Matrix:React.FC<Props> = (props: Props) => {
    function getRows(): JSX.Element[] {
        return props.numbers.map((row:number[], index:number) =>
            <Row row={row} key={index} />)
    }
    return <div style={{"display":"flex",
        "flexDirection":"column", margin: SPACING}}>
        {getRows()}
    </div>
}
export default Matrix;
