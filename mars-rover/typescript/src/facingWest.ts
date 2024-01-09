import {Facing} from "./facing";
import {Position} from "./position";
import {FacingSouth} from "./facingSouth";
import {FacingNorth} from "./facingNorth";

export class FacingWest implements Facing {
    getFacing(): string {
        return "W";
    }

    moveBackward(position: Position): Position {
        return new Position(position.x + 1, position.y);
    }

    moveForward(position: Position): Position {
        return new Position(position.x - 1, position.y);
    }

    turnLeft(): Facing {
        return new FacingSouth();
    }

    turnRight(): Facing {
        return new FacingNorth();
    }
}