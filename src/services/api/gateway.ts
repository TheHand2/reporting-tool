import { Gateway } from "../../types/gateway";
import http from "../http.service";
import { Response } from "../types";

export const fetchGateways = (): Promise<Response<Gateway>> =>
	http.get("/gateways").then((response) => response.data);
