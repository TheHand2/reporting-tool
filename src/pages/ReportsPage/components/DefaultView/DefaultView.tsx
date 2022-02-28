import moment from "moment";
import { FC, useContext, useMemo } from "react";
import AccordionElement, { AccordionElementProp } from "../../../../components/global/Accordion";
import DataTable, { TableColumn } from "../../../../components/global/DataTable";
import { Report } from "../../../../types/report";
import useGroupData, { GroupByKey } from "../../hooks/useGroupData";
import useGroupDataTotal from "../../hooks/useGroupDataTotal";
import ReportsContext from "../../ReportsContenxt";
import * as styles from "../../styles";
import { GroupItem } from "../../types";
import normalizeNumber from "../../utils/normalizeNumber";

const DefaultView: FC = () => {
	const { projects, gateways, report } = useContext(ReportsContext);
	const groupedData: GroupItem[] = useGroupData({
		projects,
		gateways,
		report,
		groupByKey: GroupByKey.PROJECT_ID,
	});

	const totalAmount = useGroupDataTotal(groupedData);
	const columnsData: TableColumn<Report>[] = [
		{
			name: "Date",
			dataKey: "created",
			render: (item: Report) => <>{moment(item.created).format("MM/DD/YYYY")}</>,
		},
		{
			name: "Gateway",
			dataKey: "gateway",
			render: (item: Report) => <>{item.gateway?.name}</>,
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

	return (
		<styles.Sections>
			<styles.SectionContainer>
				<styles.SectionTitle>All projects | All gateways</styles.SectionTitle>
				<AccordionElement items={accordionItems} />
			</styles.SectionContainer>

			<styles.SectionContainer>
				<styles.SectionTitle>TOTAL: {normalizeNumber(totalAmount)} USD</styles.SectionTitle>
			</styles.SectionContainer>
		</styles.Sections>
	);
};

export default DefaultView;
