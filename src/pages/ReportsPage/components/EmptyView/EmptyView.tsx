import { FC } from "react";
import * as styles from "../../styles";
import emptyDataImage from "../../../../assets/images/emptyData.svg";

/**
 * Empty report view
 * Empty view is displayed when we have no report data
 */
const EmptyView: FC = () => {
	return (
		<styles.EmptyDataContainer>
			No reports
			<span>
				Currently you have no data for the reports to be generated. Once you start generating
				traffic through the Balance application the reports will be shown.
			</span>
			<styles.EmptyDataImage>
				<img src={emptyDataImage} alt="emptyDataImage" />
			</styles.EmptyDataImage>
		</styles.EmptyDataContainer>
	);
};

export default EmptyView;
