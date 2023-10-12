import { Button, Table } from "react-bootstrap";
import { useTask } from "../hooks/useTask";

export const DisplayTable = () => {
	const { task, removeTask } = useTask();
	if (task.length > 0) {
		return (
			<Table striped bordered hover>
				<tbody>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>dueDate</th>
						<th>category</th>
						<th>action</th>
					</tr>
					{task.map((e) => (
						<tr key={e.id}>
							<td>{e.id}</td>
							<td>{e.title}</td>
							<td>{e.dueDate}</td>
							<td>{e.category}</td>
							<td>
								<Button
									variant="danger"
									onClick={() => {
										removeTask(e.id);
									}}
								>
									delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
	return <p>no task yet.</p>;
};
