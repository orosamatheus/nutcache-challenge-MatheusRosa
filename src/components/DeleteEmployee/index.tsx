import { Button, Modal } from "react-bootstrap";

export default function DeleteEmployee(props: any){

    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>
          <Modal.Title>Delete employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="danger" onClick={props.handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}