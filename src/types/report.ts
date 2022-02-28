import { Gateway } from "./gateway";
import { Project } from "./project";

export interface Report {
	paymentId: string;
	amount: number;
	projectId: string;
	gatewayId: string;
	userIds: string[];
	modified: string;
	created: string;
	project?: Project;
	gateway?: Gateway;
}
