import { sumBy } from "lodash";
import { useMemo } from "react";

const useGroupDataTotal = (groupedData?: { amount: number }[]) =>
	useMemo(() => sumBy(groupedData, "amount"), [groupedData]);
export default useGroupDataTotal;
