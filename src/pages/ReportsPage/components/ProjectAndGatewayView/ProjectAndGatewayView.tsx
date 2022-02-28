import moment from "moment";
import { FC, useContext } from "react";
import DataTable, { TableColumn } from "../../../../components/global/DataTable";
import { Report } from "../../../../types/report";
import useGroupDataTotal from "../../hooks/useGroupDataTotal";
import ReportsContext from "../../ReportsContenxt";
import * as styles from "../../styles";
import normalizeNumber from "../../utils/normalizeNumber";

const ProjectAndGatewayView: FC = () => {
	const { selectedProject, selectedGateway, report } = useContext(ReportsContext);

	console.log(report);

	const totalAmount = useGroupDataTotal(report);
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

	return (
		<styles.Sections>
			<styles.SectionContainer>
				<styles.SectionTitle>
					{selectedProject?.name} | {selectedGateway?.name}
				</styles.SectionTitle>
				<DataTable data={report} columns={columnsData} itemUniqueKey={(item) => item.paymentId} />
			</styles.SectionContainer>

			<styles.SectionContainer>
				<styles.SectionTitle>TOTAL: {normalizeNumber(totalAmount)} USD</styles.SectionTitle>
			</styles.SectionContainer>
		</styles.Sections>
	);
};

export default ProjectAndGatewayView;
