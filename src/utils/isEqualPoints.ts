import { Point } from '../types/boat';

const isEqualPoints = (a: Point, b: Point):boolean => a.x === b.x && a.y === b.y;

export { isEqualPoints };
