import { FC, useContext, useMemo } from "react";
import Select, { StylesConfig } from "react-select";
import { ThemeContext } from "styled-components";
import selectArrow from "../../../../assets/images/selectArrow.svg";
import { SelectOption } from "./types";

interface SelectProps {
	options: SelectOption[];
	selectedValue?: string;
	onChange: (option: SelectOption) => void;
}

/**
 * Select generic component
 */
const SelectFilter: FC<SelectProps> = ({ options, onChange, selectedValue }: SelectProps) => {
	const { colors, fontSizes } = useContext(ThemeContext);

	const selectedOption = useMemo(() => {
		return options.find((option) => option.value === selectedValue) || options[0];
	}, [selectedValue, options]);

	// react-select custom styles
	const customStyles: StylesConfig = {
		control: (styles) => ({
			...styles,
			backgroundColor: colors.GREEN,
			minHeight: "32px",
			border: "1px solid transparent",
		}),
		singleValue: (styles) => ({
			...styles,
			fontFamily: "Roboto",
			fontSize: fontSizes.MEDIUM,
			color: colors.LIGHT,
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			backgroundImage: `url(${selectArrow})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			marginRight: "9px",
			width: "14px",
			height: "14px",
		}),
	};
	return (
		<Select
			options={options}
			value={selectedOption}
			styles={customStyles}
			onChange={(option) => onChange(option as SelectOption)}
			components={{
				IndicatorSeparator: () => null,
			}}
			closeMenuOnScroll={true}
			isSearchable={false}
			theme={(theme) => ({
				...theme,
				borderRadius: 5,
				colors: {
					...theme.colors,
					primary: colors.GREEN,
				},
			})}
		/>
	);
};

export default SelectFilter;
