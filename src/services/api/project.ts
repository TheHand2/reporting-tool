import { Project } from "../../types/project";
import http from "../http.service";
import { Response } from "../types";

export const fetchProjects = (): Promise<Response<Project>> =>
	http.get("/projects").then((response) => response.data);
