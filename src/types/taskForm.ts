export interface ITaskForm {
	id: number;
	title: string;
	dueDate: string;
	category: ECategory;
}
export interface ITaskFormInput {
	title: string;
	dueDate: string;
	category?: ECategory;
}
export enum ECategory {
	work = "work",
	personal = "personal",
	school = "school",
}
