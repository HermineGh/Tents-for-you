import styled from "styled-components";

import PropTypes from "prop-types";

import { AiOutlineCopy, AiOutlineForm, AiTwotoneDelete } from "react-icons/ai";

import { useTentDelete } from "./useTentDelete";
import { useCreateTent } from "./useCreateTent";

import { formatCurrency } from "../../utils/helpers";
import CreateTentForm from "./CreateTentForm";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Button1 = styled(Button)`
  padding: 4px;
  margin-right: 4px !important;
`;
const Tent = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function TentRow({ tent }) {
  const { deleting, deleteTent } = useTentDelete();

  const { id, name, price, guestsNumber, discount, description, image } = tent;
  const { creating, createTent } = useCreateTent();
  function handleDuplicate() {
    createTent({
      name: `copy of ${name}`,
      price,
      guestsNumber,
      discount,
      description,
      image,
    });
  }
  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Tent>{name}</Tent>
        <div>Up to {guestsNumber} guests</div>
        <Price>{formatCurrency(price)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Button1 onClick={handleDuplicate} disabled={creating}>
            <AiOutlineCopy />
          </Button1>
          <Modal>
            <Modal.Open opens="edit">
              <Button1>
                <AiOutlineForm />
              </Button1>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateTentForm tentToEdit={tent} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <Button1>
                <AiTwotoneDelete />
              </Button1>
            </Modal.Open>

            <Modal.Window name="delete">
              <ConfirmDelete
                resource="tents"
                onConfirm={() => deleteTent(id)}
                disabled={deleting}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}
TentRow.propTypes = {
  tent: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  guestsNumber: PropTypes.number,
  discount: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default TentRow;
