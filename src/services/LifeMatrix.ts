import {getRandomMatrix} from "../util/random";
import {DIMENSION} from "../config/life-game-config";
function fromAlive(nLives: number): number {

    return +(nLives === 2 || nLives === 3);//to 1 only if the condition true
}

function fromDead(nLives: number): number {
    return +(nLives === 3);//to 1 only if the condition true
}
export default class LifeMatrix {
    constructor(private _matrix: number[][]) {
    }
    get matrix() {
        return this._matrix;
    }
    nextStep(): number[][] {
        const numbersCopy: number[][] = JSON.parse(JSON.stringify(this._matrix));
        for (let i = 0; i < this._matrix.length; i++) {
            for (let j = 0; j < this._matrix[i].length; j++) {
                numbersCopy[i][j] = this.getNumber(i, j);
            }
        }
        this._matrix = numbersCopy;
        return this._matrix;
    }
    private getNumber(i: number, j: number): number {
        const neighbours: (number|undefined)[] =
            [...this.rowNeighbours(i-1,j),...this.rowNeighbours(i+1,j),
                this._matrix[i][j-1], this._matrix[i][j+1]];
        const nLives = neighbours.reduce((res: number, cur) => {
            return cur ? res + 1 : res;
        }, 0)

        return this._matrix[i][j] ? fromAlive(nLives) : fromDead(nLives);
    }

    private rowNeighbours(i: number, j: number):(number|undefined)[] {

        return this._matrix[i]===undefined ? [undefined] : [this._matrix[i][j],
            this._matrix[i][j-1], this._matrix[i][j+1] ];
    }
}
