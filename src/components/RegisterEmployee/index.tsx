import { useContext } from "react";
import { Context } from "../../contexts/employee"

import { Button, Form, Modal } from "react-bootstrap";

export default function RegisterEmployee(props: any) {

    const { 
        setName, 
        setBirth, 
        setGender, 
        setEmail, 
        setCpf, 
        setStartDate, 
        setTeam, 
        handleRegistration } = useContext(Context)


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
                    Register a employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Birth date</Form.Label>
                        <Form.Control onChange={(e) => setBirth(e.target.value)} type="date" placeholder="Enter your birth date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control onChange={(e) => setGender(e.target.value)}  as="select">
                            <option>Enter your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control onChange={(e) => setCpf(e.target.value)} type="text" placeholder="Enter CPF" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control onChange={(e) => setStartDate(e.target.value)} type="month" placeholder="Enter your start date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Team</Form.Label>
                        <Form.Control onChange={(e) => setTeam(e.target.value)} as="select">
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
                <Button onClick={(e) => handleRegistration(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}