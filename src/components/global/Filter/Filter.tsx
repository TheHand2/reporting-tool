import { FC, useContext, useEffect, useState } from "react";
import ReportsContext from "../../../pages/ReportsPage/ReportsContenxt";
import DatePicker from "../UI/DatePicker";
import SelectFilter from "../UI/Select";
import * as styles from "./styles";
import { FilterParams } from "./types";
import useReactSelectOptions from "./useReactSelectOptions";

type FilterParamKey = keyof FilterParams;

interface FilterProps {
	/** Filter parameters */
	params: FilterParams;
	/** Fires when one of the filter value is changed */
	onFilter: (params: FilterParams) => void;
}

const Filter: FC<FilterProps> = ({ onFilter, params }) => {
	const { gateways, projects } = useContext(ReportsContext);
	const [filterParams, setFilterParams] = useState<FilterParams>({ ...params });

	const gatewayOptions = useReactSelectOptions({
		data: gateways ?? [],
		idKey: "gatewayId",
		defaultValue: "All gateways",
	});
	const projectOptions = useReactSelectOptions({
		data: projects ?? [],
		idKey: "projectId",
		defaultValue: "All projects",
	});

	// Listen params update to keep state synced
	useEffect(() => {
		setFilterParams(params);
	}, [params]);

	// Update parameters in state
	const updateFilter = (name: FilterParamKey, value: string | Date) => {
		setFilterParams({
			...filterParams,
			[name]: value,
		});
	};

	return (
		<styles.FilterContainer>
			<styles.FilterItem>
				<SelectFilter
					selectedValue={filterParams.projectId}
					options={projectOptions}
					onChange={(option) => updateFilter("projectId", option.value)}
				/>
			</styles.FilterItem>

			<styles.FilterItem>
				<SelectFilter
					selectedValue={filterParams.gatewayId}
					options={gatewayOptions}
					onChange={(option) => updateFilter("gatewayId", option.value)}
				/>
			</styles.FilterItem>

			<styles.FilterItem width={118}>
				<DatePicker
					selectedDate={filterParams.from}
					maxDate={filterParams.to}
					onDateSelect={(date) => updateFilter("from", date)}
					placeholder={"From date"}
				/>
			</styles.FilterItem>

			<styles.FilterItem width={118}>
				<DatePicker
					selectedDate={filterParams.to}
					minDate={filterParams.from}
					onDateSelect={(date) => updateFilter("to", date)}
					placeholder={"To date"}
				/>
			</styles.FilterItem>

			<styles.FilterItem width={118}>
				<styles.GenerateReportButton onClick={() => onFilter(filterParams)}>
					Generate report
				</styles.GenerateReportButton>
			</styles.FilterItem>
		</styles.FilterContainer>
	);
};

export default Filter;
