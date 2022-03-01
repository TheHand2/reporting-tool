/**
 * Parse and format number
 * @param number
 */
const normalizeNumber = (number: number) => {
	return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default normalizeNumber;
