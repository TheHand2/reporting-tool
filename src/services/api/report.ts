import { Report } from "../../types/report";
import http from "../http.service";
import { ReportRequestParams, Response } from "../types";

export const fetchReport = (params: ReportRequestParams): Promise<Response<Report>> =>
	http.post("/report", params).then((response) => response.data);
