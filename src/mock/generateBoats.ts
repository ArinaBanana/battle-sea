import { Boat, BoatPartType, Direction } from '../types/boat';

/*
Как и в реальной игре, эскадра будет состоять из:
— одного четырёхпалубного;
— двух трёхпалубных;
— трёх двухпалубных;
— четырёх однопалубных кораблей.
Корабли могут располагаться вертикально и горизонтально,
но при этом между кораблями должна быть хотя бы одна пустая клетка,
в том числе и по диагонали. Корабли не могут иметь Г-образную форму.
* */

export const boats: Array<Boat> = [
    {
        id: 0,
        headPosition: {
            x: 1,
            y: 0,
        },
        direction: Direction.Vertical,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 1,
        headPosition: {
            x: 5,
            y: 0,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 2,
        headPosition: {
            x: 6,
            y: 2,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 3,
        headPosition: {
            x: 1,
            y: 4,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 4,
        headPosition: {
            x: 3,
            y: 4,
        },
        direction: Direction.Vertical,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 5,
        headPosition: {
            x: 6,
            y: 5,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 6,
        headPosition: {
            x: 7,
            y: 7,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 7,
        headPosition: {
            x: 1,
            y: 8,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 8,
        headPosition: {
            x: 4,
            y: 9,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
            BoatPartType.Undamaged,
        ],
    },
    {
        id: 9,
        headPosition: {
            x: 9,
            y: 9,
        },
        direction: Direction.Horizontal,
        parts: [
            BoatPartType.Undamaged,
        ],
    },
];

// RANDOM GENERATE WIP
// const QUANTITY_BOATS = 10;
//
// const Decks = {
//     singleDeck: 4,
//     doubleDeck: 3,
//     threeDeck: 2,
//     fourDeck: 1,
// };
//
// const generatePositionData = (direction: Direction, countDecks: number) => {
//     let x;
//     let y;
//
//     if (direction === 'horizontal') {
//         x = getRandomNumber(0, 9);
//         y = getRandomNumber(0, (10 - countDecks));
//     }
//
//     if (direction === 'vertical') {
//         x = getRandomNumber(0, (10 - countDecks));
//         y = getRandomNumber(0, 9);
//     }
//
//     const result = { x, y };
// };
//
// const checkLocationBoat = (coords, direction, countDecks) => {
//     const { x, y } = coords;
//
//     const fromX = (x === 0) ? x : x - 1;
// };
//
// const generateParts = (count: number) => new Array(count)
//     .fill(null)
//     .map(() => BoatPartType.Undamaged);
//
// const generateDirection = () => {
//     const directions = ['horizontal', 'vertical'];
//
//     return getRandomArrayItem(directions);
// };
//
// const generateBoat = () => {
//     const id = getId();
//     const direction = generateDirection();
// };
//
// const generateBoats = () => new Array(QUANTITY_BOATS)
//     .fill(null)
//     .map(generateBoat);
