import { useLocalStorage } from "usehooks-ts";
import { ITaskForm } from "../types/taskForm";

export const useTask = () => {
	const [task, setTask] = useLocalStorage<ITaskForm[]>("tasklist", []);
	const addTask = (newTask: ITaskForm) => {
		setTask([...task, newTask]);
	};
	const removeTask = (id: number) => {
		setTask(task.filter((e) => e.id !== id));
	};
	return { task, addTask, removeTask };
};
