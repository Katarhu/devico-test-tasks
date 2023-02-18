import {getRandomNumber} from "./getRandomNumber.js";

/**
 * @returns {string}
 */
export const generateRandomColor = () => {
    const hue = getRandomNumber(360);
    const saturation = getRandomNumber(100);
    const lightness = getRandomNumber(100);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

