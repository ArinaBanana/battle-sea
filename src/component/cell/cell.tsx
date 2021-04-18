import React, { PureComponent } from 'react';
import { CellType } from '../../types/cell';
import './style/cell.css';

interface CellProps {
    type: CellType
}

export class Cell extends PureComponent<CellProps> {
    render() {
        const { type } = this.props;
        console.log(type);

        return (
            <div className={`field__cell cell cell_${type}`} />
        );
    }
}
