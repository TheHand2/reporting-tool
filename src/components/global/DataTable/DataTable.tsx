import { FC } from "react";
import * as styles from "./styles";
import { TableColumn } from "./types";

interface DataTableProps {
	/** Columns of the table */
	columns: TableColumn[];
	/** Table data which will be rendered */
	data: any;
}

const DataTable: FC<DataTableProps> = ({ columns, data }) => {
	return (
		<styles.StyledTable>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.dataKey}>{column.name}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item: any) => (
					<tr key={item.transactionId}>
						{columns.map((column) => (
							<td key={column.dataKey}>{item[column.dataKey]}</td>
						))}
					</tr>
				))}
			</tbody>
		</styles.StyledTable>
	);
};

export default DataTable;
