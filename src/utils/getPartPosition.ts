import { Direction, Point } from '../types/boat';

const getPartPosition = (
    headPosition: Point,
    direction: Direction,
    index: number,
) => {
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
};

export { getPartPosition };
