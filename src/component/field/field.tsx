import React, { PureComponent } from 'react';
import { CellType } from '../../types/cell';
import {
    Boat, BoatPartType, Point,
} from '../../types/boat';
import { Cell } from '../cell/cell';
import './style/field.css';
import { getPartPosition } from '../../utils/getPartPosition';

const QUANTITY_CELLS = 10;

interface FieldProps {
    boats: Array<Boat>,
    missedCoordinates: Array<Point>,
    onHitPoint: (point: Point) => void,
}

export class Field extends PureComponent<FieldProps> {
    constructor(props: FieldProps) {
        super(props);

        this.handleCellClick = this.handleCellClick.bind(this);
    }

    private handleCellClick(index: number) {
        const { onHitPoint } = this.props;
        const point = this.getPointByIndex(index);
        onHitPoint(point);
    }

    private getPointByIndex(index: number): Point {
        const y = Math.floor(index / QUANTITY_CELLS);
        const x = index % QUANTITY_CELLS;

        return {
            x,
            y,
        };
    }

    private getCellTypes() {
        const { boats, missedCoordinates } = this.props;
        const types = this.getDefaultCellTypes(QUANTITY_CELLS ** 2);

        boats.forEach((boat) => {
            const { headPosition, direction, parts } = boat;

            const isDead = parts.every(
                (part) => part === BoatPartType.Damaged,
            );

            parts.forEach((part, index) => {
                const position: Point = getPartPosition(headPosition, direction, index);
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

    private getDefaultCellTypes(quantity: number) {
        return new Array(quantity)
            .fill(null)
            .map(() => CellType.Empty);
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
        const cellTypes = this.getCellTypes();

        return (
            <div className="game__field field">
                {
                    cellTypes.map((type, index) => (
                        <Cell
                            /* eslint-disable-next-line react/no-array-index-key */
                            key={index}
                            type={type}
                            index={index}
                            onClick={this.handleCellClick}
                        />
                    ))
                }
            </div>
        );
    }
}
