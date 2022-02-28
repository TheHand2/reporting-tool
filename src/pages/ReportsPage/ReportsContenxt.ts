import { createContext } from "react";
import { Gateway } from "../../types/gateway";
import { Project } from "../../types/project";
import { ReportType } from "./types";

export interface ReportsContextValue {
	reportType: ReportType;
	gateways?: Gateway[];
	projects?: Project[];
}
const ReportsContext = createContext<ReportsContextValue>({
	reportType: ReportType.NONE,
	projects: [],
	gateways: [],
});

export default ReportsContext;
