import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAsync, useAsyncFn } from "react-use";
import Filter, { FilterParams } from "../../components/global/Filter";
import Page from "../../components/global/Page";
import { fetchGateways } from "../../services/api/gateway";
import { fetchProjects } from "../../services/api/project";
import { fetchReport } from "../../services/api/report";
import DefaultView from "./components/DefaultView";
import EmptyView from "./components/EmptyView";
import ProjectAndGatewayView from "./components/ProjectAndGatewayView";
import ProjectOrGatewayView from "./components/ProjectOrGatewayView";
import ReportsContext from "./ReportsContenxt";
import { ReportType } from "./types";

/**
 * Reports page
 */
const ReportsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filters, setFilters] = useState<FilterParams>({});

	const { loading: gateWaysLoading, value: gateWaysResponse } = useAsync(fetchGateways);
	const { loading: projectsLoading, value: projectsResponse } = useAsync(fetchProjects);
	const [{ loading: reportLoading, value: reportResponse }, loadReport] = useAsyncFn(fetchReport);

	// Handle filter change
	// Modify params object and set in url as searchParams
	const handleFilterChange = useCallback((params: FilterParams) => {
		// Convert dates to string
		const fromDate = params.from ? moment(params.from).format("YYYY-MM-DD") : undefined;
		const toDate = params.to ? moment(params.to).format("YYYY-MM-DD") : undefined;

		// Filter parameters which have values.
		const filledParams = Object.entries({ ...params, from: fromDate, to: toDate })
			.filter(([key, value]) => value)
			.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

		setSearchParams(filledParams);
	}, []);

	// Get searchParams from url and modify
	useEffect(() => {
		const fromDate = searchParams.get("from");
		const toDate = searchParams.get("to");
		const gatewayId = searchParams.get("gatewayId") ?? undefined;
		const projectId = searchParams.get("projectId") ?? undefined;

		setFilters({
			from: fromDate ? moment(fromDate, "YYYY-MM-DD").toDate() : undefined,
			to: toDate ? moment(toDate, "YYYY-MM-DD").toDate() : undefined,
			gatewayId,
			projectId,
		});

		// Load report data
		loadReport({ from: fromDate ?? undefined, to: toDate ?? undefined, gatewayId, projectId });
	}, [searchParams]);

	// Set report type based on filter selection
	const reportType = useMemo(
		() => ReportType.selectType(filters.projectId, filters.gatewayId),
		[filters.projectId, filters.gatewayId]
	);

	// Gateway which is selected in filter
	const selectedGateway = useMemo(
		() => gateWaysResponse?.data.find((gateway) => gateway.gatewayId === filters.gatewayId),
		[gateWaysResponse?.data, filters.gatewayId]
	);

	// Project which is selected in filter
	const selectedProject = useMemo(
		() => projectsResponse?.data.find((project) => project.projectId === filters.projectId),
		[projectsResponse?.data, filters.projectId]
	);

	// Render report component based on type
	const reportComponent = useMemo(() => {
		switch (reportType) {
			case ReportType.PROJECT_ONLY:
				return <ProjectOrGatewayView />;

			case ReportType.GATEWAY_ONLY:
				return <ProjectOrGatewayView />;

			case ReportType.PROJECT_AND_GATEWAY:
				return <ProjectAndGatewayView />;
			default:
				return <DefaultView />;
		}
	}, [reportType]);

	return (
		<ReportsContext.Provider
			value={{
				gateways: gateWaysResponse?.data,
				projects: projectsResponse?.data,
				report: reportResponse?.data,
				reportType,
				selectedGateway,
				selectedProject,
			}}>
			<Page
				title={"Reports"}
				subTitle={"Easily generate a report of your transactions"}
				loading={gateWaysLoading || projectsLoading || reportLoading}
				actionComponent={<Filter params={filters} onFilter={handleFilterChange} />}>
				{!reportResponse?.data.length ? <EmptyView /> : reportComponent}
			</Page>
		</ReportsContext.Provider>
	);
};
export default ReportsPage;
