import { useContext, useState, useEffect } from "react";
// import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Song = ({ song }) => {
  // const {deleteEmployee} = useContext(EmployeeContext)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [song]);

  return (
    <>
      <h4>
        {song.title} - {song.artist}
      </h4>
      {/* <td> */}
      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal">
          <i className="material-icons">&#xE254;</i>
        </button>
      </OverlayTrigger>
      {/* </td> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theSong={song} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Song;
