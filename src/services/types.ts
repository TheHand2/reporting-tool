export interface Response<T> {
	code: string;
	data: T[];
	error: any;
}

export interface ReportRequestParams {
	from?: string;
	to?: string;
	projectId?: string;
	gatewayId?: string;
}
