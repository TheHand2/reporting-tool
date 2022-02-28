import { ReactElement } from "react";

export interface TableColumn<T> {
	/** Name of the column */
	name: string;
	/** Column dataKey to get data */
	dataKey: keyof T;

	render?: (item: T) => ReactElement;
}
