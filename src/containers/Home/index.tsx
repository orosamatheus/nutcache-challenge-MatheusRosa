import { useContext } from "react";
import { Context } from "../../contexts/employee"
import { Button, Container, Row, Table } from "react-bootstrap";

import RegisterEmployee from "../../components/RegisterEmployee";
import DeleteEmployee from "../../components/DeleteEmployee";
import UpdateEmployee from "../../components/UpdateEmployee";

import "./styles.css"

export default function Home() {

    const { 
        employees, 
        setRegisterModal, 
        registerModal,
        setDeleteModal, 
        deleteModal,
        updateModal,
        setUpdateModal,
        handleDeleteEmployee,
        getEmployeeById,
        taggedEmployee
     } = useContext(Context)


    return (
        <Container>
            <Row>
                <Button variant="primary" onClick={() => setRegisterModal(true)}>
                    Register employee
                </Button>
            </Row>
            <Row>
                {employees.length === 0
                    ? <h1>No employee registrated</h1>
                    : <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth date</th>
                            <th>Email</th>
                            <th>Start date</th>
                            <th>Team</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {employees.map((employee: any) => (
                                <tr key={employee._id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.birth}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.startDate}</td>
                                    <td>{employee.team}</td>
                                    <td>
                                        <Button 
                                        variant="primary" 
                                        size="sm"
                                        onClick={() => getEmployeeById(employee._id, "update")}
                                        >Edit</Button>
                                        <Button 
                                        variant="danger" 
                                        size="sm"
                                        onClick={() => getEmployeeById(employee._id, "delete")}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                </Table>
            }
            </Row>

            <RegisterEmployee
                show={registerModal}
                onHide={() => setRegisterModal(false)}
            />
            <DeleteEmployee
                show={deleteModal}
                onHide={() => setDeleteModal(false)}
                handleDelete={() => handleDeleteEmployee(taggedEmployee.id)}
            />
            <UpdateEmployee
                show={updateModal}
                onHide={() => setUpdateModal(false)}
            />
        </Container>
    );
}