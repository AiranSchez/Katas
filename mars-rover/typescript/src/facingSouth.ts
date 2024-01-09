import {Facing} from "./facing";
import {Position} from "./position";
import {FacingWest} from "./facingWest";
import {FacingEast} from "./facingEast";

export class FacingSouth implements Facing {
    getFacing(): string {
        return "S";
    }

    moveBackward(position: Position): Position {
        return new Position(position.x, position.y + 1);
    }

    moveForward(position: Position): Position {
        return new Position(position.x, position.y - 1)
    }

    turnLeft(): Facing {
        return new FacingEast();
    }

    turnRight(): Facing {
        return new FacingWest();
    }
}