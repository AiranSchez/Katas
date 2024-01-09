import {Position} from "./position";

export interface Facing {
    turnLeft: () => Facing
    turnRight: () => Facing
    moveForward: (position: Position) => Position
    moveBackward: (position: Position) => Position
    getFacing: () => string
}