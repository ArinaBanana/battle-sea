import React, { PureComponent } from 'react';
import { Field } from '../field/field';
import { Boat, BoatPartType, Point } from '../../types/boat';
import './style/game.css';
import { getPartPosition } from '../../utils/getPartPosition';
import { isEqualPoints } from '../../utils/isEqualPoints';

interface GameProps {
    initialBoats: Array<Boat>
}

interface GameState {
    boats: Array<Boat>,
    missedPoints: Array<Point>
}

export class Game extends PureComponent<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);

        const { initialBoats } = this.props;

        this.state = {
            boats: initialBoats,
            missedPoints: [],
        };

        this.handleHitPoint = this.handleHitPoint.bind(this);
    }

    handleHitPoint(point: Point) {
        const { boats, missedPoints } = this.state;
        let hittedPartIndex: number = -1;

        const hittedBoatIndex = boats.findIndex((boat) => {
            const { headPosition, parts, direction } = boat;

            const foundIndex = parts.findIndex((part, index) => {
                const partPoint = getPartPosition(headPosition, direction, index);
                return isEqualPoints(point, partPoint);
            });

            hittedPartIndex = foundIndex;

            return foundIndex !== -1;
        });

        if (hittedBoatIndex !== -1) {
            this.setState({
                boats: [
                    ...boats.slice(0, hittedBoatIndex),
                    {
                        ...boats[hittedBoatIndex],
                        parts: [
                            ...boats[hittedBoatIndex].parts.slice(0, hittedPartIndex),
                            BoatPartType.Damaged,
                            ...boats[hittedBoatIndex].parts.slice(hittedPartIndex + 1),
                        ],
                    } as Boat,
                    ...boats.slice(hittedBoatIndex + 1)],
            });
            return;
        }

        this.setState({
            missedPoints: [...missedPoints, point],
        });
    }

    render() {
        const { boats, missedPoints } = this.state;

        return (
            <section className="game">
                <h1 className="game__title">Морской бой</h1>
                <p className="game__description">
                    Перед вами вражеское поле. Кликайте на клетки, чтобыть подбить корабль.
                </p>

                <Field
                    boats={boats}
                    missedCoordinates={missedPoints}
                    onHitPoint={this.handleHitPoint}
                />
            </section>
        );
    }
}
