import {Position} from "./position";
import {Facing} from "./facing";


export class MarsRover {
  state: Facing
  position: Position
  constructor(state: Facing, position: Position) {
    this.state = state
    this.position = position
  }

  move = (command: string) => {
    if (command === 'F') {
      this.position = this.state.moveForward(this.position)
    }
    if (command === 'B') {
      this.position = this.state.moveBackward(this.position)
    }
    if (command === 'L') {
      this.state = this.state.turnLeft()
    }
    if (command === 'R') {
      this.state = this.state.turnRight()
    }
  };

  getPositionX = () => {
    return this.position.x;
  }

  getPositionY = () => {
    return this.position.y;
  }

  getFacing = () => {
    return this.state.getFacing();
  }
}
