/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { Container, Row } from "react-bootstrap"
import { useTask } from "../hooks/useTask";
import { useFormik } from "formik";
import { ECategory, ITaskForm, ITaskFormInput } from "../types/taskForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import dayjs from "dayjs";
import * as Yup from "yup";
export const AddForm = () => {
	const { task, addTask } = useTask();
	const formik = useFormik<ITaskFormInput>({
		initialValues: {
			title: "",
			dueDate: dayjs().format("YYYY-MM-DD"),
			category: undefined,
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(3, "string should be >3 characters")
				.max(20, "string should be <=20 characters")
				.required("Required"),
			dueDate: Yup.string().required("Required"),
			category: Yup.mixed()
				.required()
				.test((value) => Object.values(ECategory).includes(value as ECategory)),
		}),
		onSubmit: (values) => {
			console.log(values);
			addTask(Object.assign(values, { id: task.length + 1 }) as ITaskForm);
			formik.resetForm();
		},
	});
	return (
		<Form className="d-flex flex-column align-items-stretch" onSubmit={formik.handleSubmit}>
			<Form.Group className="d-flex flex-column mb-3 align-items-start">
				<Form.Label className="">Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter title"
					id="title"
					name="title"
					onChange={formik.handleChange}
					value={formik.values.title}
				/>
				{formik.touched.title && formik.errors.title ? (
					<Form.Text className="text-danger">{formik.errors.title}</Form.Text>
				) : (
					<></>
				)}
			</Form.Group>

			<Form.Group className="d-flex flex-column mb-3 align-items-start">
				<Form.Label>Due Date</Form.Label>
				<Form.Control
					type="date"
					id="dueDate"
					name="dueDate"
					onChange={formik.handleChange}
					value={formik.values.dueDate}
				/>
				{formik.touched.title && formik.errors.title ? (
					<Form.Text className="text-danger">{formik.errors.title}</Form.Text>
				) : (
					<></>
				)}
			</Form.Group>
			<Form.Group className="d-flex flex-column mb-3 align-items-start">
				<Form.Label>Category</Form.Label>
				<Form.Select
					aria-label="Category"
					id="category"
					name="category"
					onChange={formik.handleChange}
					value={formik.values.category}
				>
					<option value={undefined}>Open this select menu</option>
					{Object.entries(ECategory).map(([key, value]) => (
						<option key={key} value={value}>
							{key}
						</option>
					))}
				</Form.Select>
				{formik.touched.category && formik.errors.category ? (
					<Form.Text className="text-danger">{formik.errors.category}</Form.Text>
				) : (
					<></>
				)}
			</Form.Group>

			<Button variant="primary" className="align-self-start" type="submit">
				Submit
			</Button>
		</Form>
	);
};
