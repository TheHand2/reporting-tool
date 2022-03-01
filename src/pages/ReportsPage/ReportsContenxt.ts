import { createContext } from "react";
import { Gateway } from "../../types/gateway";
import { Project } from "../../types/project";
import { Report } from "../../types/report";
import { ReportType } from "./types";

export interface ReportsContextValue {
	/** Gateways data */
	gateways?: Gateway[];
	/** Projects data */
	projects?: Project[];
	/** Report data */
	report?: Report[];
	/**
	 *  Report type
	 * Set based on filter selection
	 */
	reportType: ReportType;
	/** Project data which is selected in filter */
	selectedProject?: Project;
	/** Gateway data which is selected in filter */
	selectedGateway?: Gateway;
}

const ReportsContext = createContext<ReportsContextValue>({
	projects: [],
	gateways: [],
	report: [],
	reportType: ReportType.NONE,
});

export default ReportsContext;
