import { chain, find, sumBy } from "lodash";
import { useMemo } from "react";
import { Gateway } from "../../../types/gateway";
import { Project } from "../../../types/project";
import { Report } from "../../../types/report";
import { GroupItem } from "../types";
import { generateRandomColor } from "../utils/random";

export enum GroupByKey {
	PROJECT_ID = "projectId",
	GATEWAY_ID = "gatewayId",
}

interface UseGroupDataProps {
	/** Gateways data */
	gateways?: Gateway[];
	/** Projects data */
	projects?: Project[];
	/** Report data */
	report?: Report[];
	/**
	 * Key which is used to group report data
	 */
	groupByKey: GroupByKey;
}

/**
 * Group report data based on key and requirement
 * @param report
 * @param gateways
 * @param projects
 * @param groupByKey
 */
const useGroupData = ({
	report,
	gateways,
	projects,
	groupByKey,
}: UseGroupDataProps): GroupItem[] => {
	// Select which data source we need to use for main item
	const itemArray = groupByKey === GroupByKey.PROJECT_ID ? projects : gateways;

	return useMemo((): GroupItem[] => {
		return chain(report)
			.groupBy(groupByKey)
			.mapValues((values, key) => {
				// Find main item information based on groupByKey
				const item = find(itemArray, { [groupByKey]: key }) as Project | Gateway;
				return {
					data: values.map((value) => {
						return {
							...value,
							project: find(projects, { projectId: value.projectId }),
							gateway: find(gateways, { gatewayId: value.gatewayId }),
						};
					}),
					item,
					color: generateRandomColor(),
					amount: sumBy(values, "amount"),
				};
			})
			.values()
			.value();
	}, [report, gateways, projects, groupByKey]);
};

export default useGroupData;
