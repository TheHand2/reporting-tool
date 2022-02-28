import * as styles from "./styles";
import { TableColumn } from "./types";

interface DataTableProps<T> {
	/** Columns of the table */
	columns: TableColumn<T>[];
	/** Table data which will be rendered */
	data?: T[];
	/**
	 * A function to extract the unique key of each item in the list.
	 */
	itemUniqueKey: (item: T, index: number) => string;
}

const DataTable = <T,>({ columns, data, itemUniqueKey }: DataTableProps<T>) => {
	return (
		<styles.StyledTable>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={column.name}>{column.name}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.map((item, index) => (
					<tr key={itemUniqueKey(item, index)}>
						{columns.map((column, index) => (
							<td key={column.name}>
								{column.render ? column.render(item) : item[column.dataKey]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</styles.StyledTable>
	);
};

export default DataTable;
