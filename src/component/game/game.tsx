import React, { PureComponent } from 'react';
import { Field } from '../field/field';
import { Boat, Point } from '../../types/boat';
import './style/game.css';

interface GameProps {
    initialBoats: Array<Boat>
}

interface GameState {
    boats: Array<Boat>,
    missedCoordinates: Array<Point>
}

export class Game extends PureComponent<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);

        const { initialBoats } = this.props;

        this.state = {
            boats: initialBoats,
        };
    }

    render() {
        const { boats, missedCoordinates } = this.state;

        return (
            <section className="game">
                <h1>Морской бой</h1>

                <Field boats={boats} missedCoordinates={missedCoordinates} />
            </section>
        );
    }
}
