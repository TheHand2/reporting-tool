import { Gateway } from "../../types/gateway";
import { Project } from "../../types/project";
import { Report } from "../../types/report";

export enum ReportType {
	PROJECT_ONLY,
	GATEWAY_ONLY,
	PROJECT_AND_GATEWAY,
	NONE,
}

// Return report type
export namespace ReportType {
	export function selectType(projectId?: string, gatewayId?: string) {
		if (!projectId && !gatewayId) return ReportType.NONE;
		if (projectId && !gatewayId) return ReportType.PROJECT_ONLY;
		if (!projectId && gatewayId) return ReportType.GATEWAY_ONLY;
		return ReportType.PROJECT_AND_GATEWAY;
	}
}

export interface GroupItem {
	amount: number;
	data: Report[];
	item: Gateway | Project;
	color: string;
}
