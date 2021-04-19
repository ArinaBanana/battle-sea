import React, { PureComponent } from 'react';
import { CellType } from '../../types/cell';
import './style/cell.css';

interface CellProps {
    type: CellType,
    onClick: (index: number) => void,
    index: number
}

export class Cell extends PureComponent<CellProps> {
    constructor(props: CellProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick() {
        const { onClick, index } = this.props;
        onClick(index);
    }

    render() {
        const { type } = this.props;

        return (
            <div
                className={`field__cell cell cell_${type}`}
                onClick={this.handleClick}
            />
        );
    }
}
