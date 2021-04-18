import React, { PureComponent } from 'react';
import { CellType } from '../../types/cell';
import {
    Boat, BoatPartType, Point, Direction,
} from '../../types/boat';
import { Cell } from '../cell/cell';
import './style/field.css';

const QUANTITY_CELLS = 10;

interface FieldProps {
    boats: Array<Boat>,
    missedCoordinates: Array<Point>
}

export class Field extends PureComponent<FieldProps> {
    private getCells() {
        const { boats, missedCoordinates } = this.props;
        const types = this.getTypes(QUANTITY_CELLS ** 2);

        boats.forEach((boat) => {
            const { headPosition, direction, parts } = boat;

            const isDead = parts.every(
                (part) => part === BoatPartType.Damaged,
            );

            parts.forEach((part, index) => {
                const position: Point = this.getPosition(headPosition, direction, index);
                const cellType = this.getCellType(part, isDead);
                const typesIndex = this.getIndexForType(position);

                types[typesIndex] = cellType;
            });
        });

        missedCoordinates.forEach((point) => {
            const typesIndex = this.getIndexForType(point);

            types[typesIndex] = CellType.Missed;
        });

        return types;
    }

    private getTypes(quantity: number) {
        return new Array(quantity)
            .fill(null)
            .map(() => CellType.Empty);
    }

    private getPosition(
        headPosition: Point,
        direction: Direction,
        index: number,
    ) {
        const position = {
            ...headPosition,
        };

        switch (direction) {
            case Direction.Horizontal:
                position.x += index;
                break;
            case Direction.Vertical:
                position.y += index;
                break;
        }

        return position;
    }

    private getCellType(
        part: BoatPartType,
        isDead: boolean,
    ) {
        let cellType: CellType;

        switch (part) {
            case BoatPartType.Undamaged:
                cellType = CellType.Empty;
                break;
            case BoatPartType.Damaged:
                cellType = isDead ? CellType.Killed : CellType.Hit;
                break;
        }

        return cellType;
    }

    private getIndexForType(point: Point) {
        return QUANTITY_CELLS * point.y + point.x;
    }

    render() {
        const cells = this.getCells();

        return (
            <div className="game__field field">
                {cells.map((cell) => <Cell type={cell} />)}
            </div>
        );
    }
}
