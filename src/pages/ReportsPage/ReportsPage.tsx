import moment from "moment";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAsync } from "react-use";
import { AccordionElementProp } from "../../components/global/Accordion";
import DataTable, { TableColumn } from "../../components/global/DataTable";
import Filter, { FilterParams } from "../../components/global/Filter";
import Page from "../../components/global/Page";
import { fetchGateways } from "../../services/api/gateway";
import { fetchProjects } from "../../services/api/project";
import ReportsContext from "./ReportsContenxt";
import * as styles from "./styles";
import { ReportType } from "./types";

const columnsData: TableColumn[] = [
	{
		name: "Date",
		dataKey: "date",
	},
	{
		name: "Transaction ID",
		dataKey: "transactionId",
	},
	{
		name: "Amount",
		dataKey: "amount",
	},
];

const accordionItems: AccordionElementProp[] = [
	{
		titles: ["Gateway 1", "63,000 USD"],
		component: (
			<DataTable
				columns={columnsData}
				data={[{ date: "2/2/2/", amount: "2", transactionId: "21321" }]}
			/>
		),
	},
];

/**
 * Reports page
 */
const ReportsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { loading: gateWaysLoading, value: gateWaysResponse } = useAsync(fetchGateways);
	const { loading: projectsLoading, value: projectsResponse } = useAsync(fetchProjects);

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
	const filterParams: FilterParams = useMemo(() => {
		const fromDate = searchParams.get("from");
		const toDate = searchParams.get("to");
		const gatewayId = searchParams.get("gatewayId") ?? undefined;
		const projectId = searchParams.get("projectId") ?? undefined;
		return {
			from: fromDate ? moment(fromDate, "YYYY-MM-DD").toDate() : undefined,
			to: toDate ? moment(toDate, "YYYY-MM-DD").toDate() : undefined,
			gatewayId,
			projectId,
		};
	}, [searchParams]);

	// Set report type based on filter selection
	const reportType = useMemo(() => {
		return ReportType.selectType(filterParams.projectId, filterParams.gatewayId);
	}, [filterParams]);

	// Render report component based on type
	const reportComponent = useMemo(() => {
		switch (reportType) {
			case ReportType.PROJECT_ONLY:
				return <>{ReportType.PROJECT_ONLY}</>;

			case ReportType.GATEWAY_ONLY:
				return <>{ReportType.GATEWAY_ONLY}</>;

			case ReportType.PROJECT_AND_GATEWAY:
				return <>{ReportType.PROJECT_AND_GATEWAY}</>;
			default:
				return <>{ReportType.NONE}</>;
		}
	}, [reportType]);

	return (
		<ReportsContext.Provider
			value={{
				reportType,
				gateways: gateWaysResponse?.data,
				projects: projectsResponse?.data,
			}}>
			<Page
				title={"Reports"}
				subTitle={"Easily generate a report of your transactions"}
				loading={gateWaysLoading || projectsLoading}
				actionComponent={<Filter params={filterParams} onFilter={handleFilterChange} />}>
				{reportComponent}
			</Page>
		</ReportsContext.Provider>
	);
};
export default ReportsPage;
