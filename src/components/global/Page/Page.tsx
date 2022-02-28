import { FC } from "react";
import * as styles from "./styles";
import { PageProps } from "./types";

/**
 * Page generic component
 * @param title
 * @param subTitle
 * @param actionComponent
 * @param loading
 * @param children
 */
const Page: FC<PageProps> = ({ title, subTitle, actionComponent, children, loading }) => {
	return (
		<>
			<styles.PageHeader>
				<styles.PageTitleSection>
					<styles.PageTitle>{title}</styles.PageTitle>
					<styles.PageSubTitle>{subTitle}</styles.PageSubTitle>
				</styles.PageTitleSection>
				{actionComponent}
			</styles.PageHeader>
			<styles.PageContent>{loading ? <styles.Spinner /> : children}</styles.PageContent>
		</>
	);
};

export default Page;
