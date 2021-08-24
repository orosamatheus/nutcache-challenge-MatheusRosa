import { useState, useContext } from "react";
import { Context } from "../../contexts/employee"
import { Button, Container, Row, Table } from "react-bootstrap";

import RegisterEmployee from "../../components/RegisterEmployee";

import "./styles.css"

export default function Home() {
    const [modalShow, setModalShow] = useState(false);

    const { employees } = useContext(Context)


    return (
        <Container>
            <Row>
                <Button variant="primary" onClick={() => setModalShow(true)}>
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
                            {employees.map((employee) => {
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>2020/09/21</td>
                                    <td>email@email</td>
                                    <td>02/2021</td>
                                    <td>Frontend</td>
                                    <td>
                                        <Button variant="primary" size="sm">Edit</Button>
                                        <Button variant="danger" size="sm">Delete</Button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                </Table>
            }
            </Row>

            <RegisterEmployee
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
}