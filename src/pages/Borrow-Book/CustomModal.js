import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setSystem } from "./systemSlice";

export const CustomModal = ({ children, modalTitle }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.systemState);
  return (
    <>
      <Modal show={modal} onHide={() => dispatch(setSystem(false))}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
