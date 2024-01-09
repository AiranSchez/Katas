import {MarsRover} from '../src/mars-rover';
import {Position} from "../src/position";
import {FacingNorth} from "../src/facingNorth";
import {FacingEast} from "../src/facingEast";
import {FacingSouth} from "../src/facingSouth";
import {FacingWest} from "../src/facingWest";


describe('Mars Rover', () => {
    describe('check turning actions', () => {
        it.each([
            {initialFacing: new FacingEast(), expectedFacing: 'N'},
            {initialFacing: new FacingNorth(), expectedFacing: 'W'},
            {initialFacing: new FacingWest(), expectedFacing: 'S'},
            {initialFacing: new FacingSouth(), expectedFacing: 'E'},
        ])(`should return $expectedFacing when turning left`, ({ initialFacing, expectedFacing}) => {
            const marsRover = new MarsRover(initialFacing, new Position(0, 0));

            marsRover.move('L');

            expect(marsRover.getFacing()).toEqual(expectedFacing)
        })

        it.each([
            {initialFacing: new FacingEast(), expectedFacing: 'S'},
            {initialFacing: new FacingNorth(), expectedFacing: 'E'},
            {initialFacing: new FacingWest(), expectedFacing: 'N'},
            {initialFacing: new FacingSouth(), expectedFacing: 'W'},
        ])('should return $expectedFacing when turning right', ({initialFacing, expectedFacing}) => {
            const marsRover = new MarsRover(initialFacing, new Position(0, 0));

            marsRover.move('R');

            expect(marsRover.getFacing()).toEqual(expectedFacing)
        })

        it.each([
            [new FacingNorth(), new Position(0,0), 'L'],
            [new FacingNorth(), new Position(0,0), 'R'],
            [new FacingEast(), new Position(0,0), 'L'],
            [new FacingEast(), new Position(0,0), 'R'],
            [new FacingSouth(), new Position(0,0), 'L'],
            [new FacingSouth(), new Position(0,0), 'R'],
            [new FacingWest(), new Position(0,0), 'L'],
            [new FacingWest(), new Position(0,0), 'R'],
        ])('should not modify the position when a turning command is given', (facing, staticPosition, turnCommand) => {
            const marsRover = new MarsRover(facing, staticPosition);

            marsRover.move(turnCommand);

            expect(marsRover.getPositionX()).toEqual(staticPosition.x)
            expect(marsRover.getPositionY()).toEqual(staticPosition.y)
        })
    })
    describe('check moving actions', () => {
        it('should move forward when a starting position and facing are given', () => {
            const marsRover = new MarsRover(new FacingNorth(), new Position(0, 0));

            marsRover.move('F');

            expect(marsRover.getPositionX()).toEqual(0)
            expect(marsRover.getPositionY()).toEqual(1)
            expect(marsRover.getFacing()).toEqual('N')
        });

        it('should move backward when a starting position and facing are given', () => {
            const marsRover = new MarsRover(new FacingNorth(), new Position(0, 0));

            marsRover.move('B');

            expect(marsRover.getPositionX()).toEqual(0)
            expect(marsRover.getPositionY()).toEqual(-1)
            expect(marsRover.getFacing()).toEqual('N')
        })
    })
});
