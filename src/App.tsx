import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form";
import { DisplayTable } from "./components/table";

function App() {
	return (
		<Container>
			<AddForm />
			<div className="m-2 w-100"></div>
			<DisplayTable />
		</Container>
	);
}

export default App;
