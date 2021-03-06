/**
 * Returns random color
 */
const generateRandomColor = () => "#" + (((1 << 24) * Math.random()) | 0).toString(16);

export { generateRandomColor };
