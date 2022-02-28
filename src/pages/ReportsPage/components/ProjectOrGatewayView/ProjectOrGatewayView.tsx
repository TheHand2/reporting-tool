import moment from "moment";
import { FC, useContext, useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import AccordionElement, { AccordionElementProp } from "../../../../components/global/Accordion";
import DataTable, { TableColumn } from "../../../../components/global/DataTable";
import { Report } from "../../../../types/report";
import useGroupData, { GroupByKey } from "../../hooks/useGroupData";
import useGroupDataTotal from "../../hooks/useGroupDataTotal";
import ReportsContext from "../../ReportsContenxt";
import * as styles from "../../styles";
import { GroupItem, ReportType } from "../../types";
import normalizeNumber from "../../utils/normalizeNumber";

const ProjectOrGatewayView: FC = () => {
	const { reportType, projects, report, gateways, selectedGateway, selectedProject } =
		useContext(ReportsContext);
	const isProjectOnly = reportType === ReportType.PROJECT_ONLY;

	const groupedData: GroupItem[] = useGroupData({
		projects,
		gateways,
		report,
		groupByKey: isProjectOnly ? GroupByKey.GATEWAY_ID : GroupByKey.PROJECT_ID,
	});

	const totalAmount = useGroupDataTotal(groupedData);

	const columnsData: TableColumn<Report>[] = [
		{
			name: "Date",
			dataKey: "created",
			render: (item: Report) => <>{moment(item.created).format("MM/DD/YYYY")}</>,
		},
		{
			name: "Transaction ID",
			dataKey: "paymentId",
		},
		{
			name: "Amount",
			dataKey: "amount",
			render: (item: Report) => <>{normalizeNumber(item.amount)} USD</>,
		},
	];

	const accordionItems: AccordionElementProp[] = useMemo(
		() =>
			groupedData.map((groupItem) => {
				return {
					titles: [groupItem.item.name, `TOTAL: ${normalizeNumber(groupItem.amount)} USD`],
					component: (
						<DataTable
							data={groupItem.data}
							columns={columnsData}
							itemUniqueKey={(item) => item.paymentId}
						/>
					),
				};
			}),
		[groupedData]
	);

	const chartData = useMemo(
		() =>
			groupedData.map((groupItem) => {
				return { name: groupItem.item.name, value: groupItem.amount, color: groupItem.color };
			}),
		[groupedData]
	);

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);
		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<>
			<styles.Sections>
				<styles.SectionContainer>
					<styles.SectionTitle>
						{selectedProject?.name || "All projects"} | {selectedGateway?.name || "All gateways"}
					</styles.SectionTitle>
					<AccordionElement items={accordionItems} />
				</styles.SectionContainer>
			</styles.Sections>

			<styles.ChartInfoContainer>
				<styles.SectionContainer>
					<styles.ChartLegendContainer>
						{chartData.map((chartItem) => (
							<styles.ChartLegendItem key={chartItem.color}>
								<styles.ChartLegendIcon color={chartItem.color}></styles.ChartLegendIcon>
								{chartItem.name}
							</styles.ChartLegendItem>
						))}
					</styles.ChartLegendContainer>
				</styles.SectionContainer>
				<ResponsiveContainer width="100%" height={360}>
					<PieChart>
						<Pie
							data={chartData}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							innerRadius={60}
							dataKey="value">
							{chartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<styles.SectionContainer>
					<styles.SectionTitle>
						{isProjectOnly ? "PROJECT TOTAL" : "GATEWAY TOTAL"}: {normalizeNumber(totalAmount)} USD
					</styles.SectionTitle>
				</styles.SectionContainer>
			</styles.ChartInfoContainer>
		</>
	);
};

export default ProjectOrGatewayView;
