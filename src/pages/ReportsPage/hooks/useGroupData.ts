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
	gateways?: Gateway[];
	projects?: Project[];
	report?: Report[];
	groupByKey: GroupByKey;
}

const useGroupData = ({
	report,
	gateways,
	projects,
	groupByKey,
}: UseGroupDataProps): GroupItem[] => {
	const itemArray = groupByKey === GroupByKey.PROJECT_ID ? projects : gateways;

	return useMemo((): GroupItem[] => {
		return chain(report)
			.groupBy(groupByKey)
			.mapValues((values, key) => {
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
