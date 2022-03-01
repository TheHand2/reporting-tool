import { sumBy } from "lodash";
import { useMemo } from "react";

/**
 * Returns total amount of group amounts
 * @param groupedData
 */
const useGroupDataTotal = (groupedData?: { amount: number }[]) =>
	useMemo(() => sumBy(groupedData, "amount"), [groupedData]);
export default useGroupDataTotal;
