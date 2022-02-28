import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../../assets/images/calendarIcon.svg";
import * as styles from "./styles";

// Input element props
type InputProps = React.HTMLProps<HTMLInputElement>;

interface DatePickerProps {
	onDateSelect: (date: Date) => void;
	selectedDate?: Date;
	minDate?: Date;
	maxDate?: Date;
	placeholder: string;
}

// We are adding custom icon in DatePicker, because of this we made customInput
const CustomInput = forwardRef<HTMLInputElement, InputProps>((inputProps, ref) => {
	return (
		<styles.DatePickerContainer onClick={inputProps.onClick} ref={ref}>
			<label>{inputProps.value || inputProps.placeholder}</label>
			<img src={calendarIcon} alt={"calendarIcon"} />
		</styles.DatePickerContainer>
	);
});
CustomInput.displayName = "CustomDateInput";

const DatePicker = ({
	selectedDate,
	minDate,
	maxDate,
	onDateSelect,
	placeholder,
}: DatePickerProps) => {
	return (
		<ReactDatePicker
			selected={selectedDate}
			minDate={minDate}
			maxDate={maxDate}
			onChange={onDateSelect}
			placeholderText={placeholder}
			customInput={<CustomInput />}
		/>
	);
};
export default DatePicker;
