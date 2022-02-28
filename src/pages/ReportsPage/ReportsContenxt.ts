import { createContext } from "react";
import { Gateway } from "../../types/gateway";
import { Project } from "../../types/project";
import { Report } from "../../types/report";
import { ReportType } from "./types";

export interface ReportsContextValue {
	gateways?: Gateway[];
	projects?: Project[];
	report?: Report[];
	reportType: ReportType;
	selectedProject?: Project;
	selectedGateway?: Gateway;
}
const ReportsContext = createContext<ReportsContextValue>({
	projects: [],
	gateways: [],
	report: [],
	reportType: ReportType.NONE,
});

export default ReportsContext;
