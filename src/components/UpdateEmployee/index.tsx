import { useContext } from "react";
import { Context } from "../../contexts/employee"

import { Button, Form, Modal } from "react-bootstrap";

export default function UpdateEmployee(props: any) {

    const { 
        setName, 
        setBirth, 
        setGender, 
        setEmail, 
        setCpf, 
        setStartDate, 
        setTeam, 
        handleUpdateEmployee,
        taggedEmployee
     } = useContext(Context)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update a employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder={taggedEmployee.name} onChange={(e) => setName(e.target.value)} type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Birth date</Form.Label>
                        <Form.Control placeholder={taggedEmployee.birth}onChange={(e) => setBirth(e.target.value)} type="date"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control placeholder={taggedEmployee.gender} onChange={(e) => setGender(e.target.value)}  as="select">
                            <option>Enter your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder={taggedEmployee.email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control placeholder={taggedEmployee.cpf} onChange={(e) => setCpf(e.target.value)} type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control placeholder={taggedEmployee.startDate} onChange={(e) => setStartDate(e.target.value)} type="month"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Team</Form.Label>
                        <Form.Control placeholder={taggedEmployee.team} onChange={(e) => setTeam(e.target.value)} as="select">
                            <option>Enter your Team</option>
                            <option>Mobile</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>None of these</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button onClick={(e) => handleUpdateEmployee(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}