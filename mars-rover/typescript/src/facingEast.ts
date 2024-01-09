import {Facing} from "./facing";
import {Position} from "./position";
import {FacingNorth} from "./facingNorth";
import {FacingSouth} from "./facingSouth";

export class FacingEast implements Facing {
    getFacing(): string {
        return "E";
    }

    moveBackward(position: Position): Position {
        return new Position(position.x - 1, position.y);
    }

    moveForward(position: Position): Position {
        return new Position(position.x + 1, position.y);
    }

    turnLeft(): Facing {
        return new FacingNorth();
    }

    turnRight(): Facing {
        return new FacingSouth();
    }
}