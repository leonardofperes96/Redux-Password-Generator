import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../hooks/useDispatch";
import { ActionTypes } from "../store/action-types/action-types";

const CopyModal = () => {
  const { show } = useAppSelector((store) => store.password);
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };
  return (
    <>
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password successfully copied.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Now you can use your generated password wherever you want.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CopyModal;
