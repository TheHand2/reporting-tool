import { useMemo } from "react";
import { Gateway } from "../../../types/gateway";
import { Project } from "../../../types/project";
import { SelectOption } from "../UI/Select";

export type IdKey = keyof Project | keyof Gateway;

interface UseReactSelectOptionsProps<T> {
	data: T[];
	idKey: keyof T;
	defaultValue: string;
}

/**
 * Map data which we are passing to react-select.
 */
const useReactSelectOptions = <T extends { name: string }>({
	data,
	idKey,
	defaultValue,
}: UseReactSelectOptionsProps<T>): SelectOption[] =>
	useMemo(() => {
		const items = data.map((item) => {
			return {
				value: item[idKey],
				label: item.name,
			};
		});
		return [{ label: defaultValue, value: "" }, ...items];
	}, [data]);

export default useReactSelectOptions;
