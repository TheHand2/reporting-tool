export interface Response<T> {
	code: string;
	data: T[];
	error: any;
}
