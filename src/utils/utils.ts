const getRandomNumber = (min: number, max: number) => min + Math.floor(Math.random() * (max - min));

const getRandomArrayItem = (array: Array<any>) => {
    const randomIndex = getRandomNumber(0, array.length);

    return array[randomIndex];
};

const generateId = () => {
    let counter = 0;

    return () => counter++;
};
const getId = generateId();

export { getRandomArrayItem, getRandomNumber, getId };
