import styled from "styled-components";

export const Sections = styled.div`
	display: flex;
	flex-direction: column;
	gap: 27px;
	width: 100%;
`;

export const ChartInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 31px;
	gap: 80px;
	width: 100%;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.BLUE1};
	padding: 18px;
	gap: 36px;
	border-radius: 10px;
	width: 100%;
`;

export const SectionTitle = styled.div`
	display: flex;
	font-size: ${(props) => props.theme.fontSizes.LARGE};
	color: ${(props) => props.theme.colors.BLACK};
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
`;

export const ChartLegendContainer = styled.div`
	display: flex;
	gap: 32px;
`;

export const ChartLegendItem = styled.div`
	display: flex;
	gap: 12px;
	color: ${(props) => props.theme.colors.BLACK};
	font-weight: ${(props) => props.theme.fontWeights.NORMAL};
	font-size: ${(props) => props.theme.fontSizes.MEDIUM};
`;

export const ChartLegendIcon = styled.div<{ color: string }>`
	width: 15px;
	height: 15px;
	border-radius: 5px;
	background-color: ${(props) => props.color};
`;

export const EmptyDataContainer = styled.div`
	margin: 66px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
	color: ${(props) => props.theme.colors.BLACK};
	font-size: ${(props) => props.theme.fontSizes.H1};
	text-align: center;
	span {
		font-weight: ${(props) => props.theme.fontWeights.BOLD};
		color: ${(props) => props.theme.colors.GRAY1};
		font-size: ${(props) => props.theme.fontSizes.LARGE};
		width: 470px;
		line-height: 19px;
	}
`;
export const EmptyDataImage = styled.div`
	margin: 50px 0 20px;
`;
