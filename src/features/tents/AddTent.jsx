import styled from "styled-components";

import CreateTentForm from "./CreateTentForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function AddTent() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="tent-form">
          <Row>
            <Button>Add New Tent</Button>
          </Row>
        </Modal.Open>
        <Modal.Window name="tent-form">
          <CreateTentForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTent;
