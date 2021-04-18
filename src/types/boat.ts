export interface Point {
    x: number;
    y: number;
}

export enum Direction {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export enum BoatPartType {
    Damaged = 'damaged',
    Undamaged = 'undamaged',
}

export interface Boat {
    id: number,
    headPosition: Point;
    direction: Direction;
    parts: Array<BoatPartType>;
}
