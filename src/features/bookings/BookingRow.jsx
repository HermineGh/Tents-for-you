import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { format, isToday } from "date-fns";
import PropTypes from "prop-types";

import {
  AiOutlineHdd,
  AiOutlineRollback,
  AiTwotoneDelete,
  AiTwotoneDownSquare,
} from "react-icons/ai";

import { useCheckout } from "../check-in-out/useCheckout";
import { useBookingDelete } from "./useBookingDelete";
import { useUpdateTotalPrice } from "./useUpdateTotalPrice";

import { formatDistanceFromNow } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Tent = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-orang-500);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-orange-500);
    font-size: 1rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    checkInDate,
    checkOutDate,
    numbNight,
    totalprice,
    tentPrice,
    status,
    guests: { fullName: guestName, email },
    tents: { name: tentName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const { checkout, isCheckingOut } = useCheckout();
  const { deleting, delBooking } = useBookingDelete();

  const { calcTotalPrice } = useUpdateTotalPrice();

  if (!totalprice)
    calcTotalPrice({
      bookingId,
      totalprice: {
        totalprice: tentPrice * numbNight,
      },
    });

  const navigate = useNavigate();

  return (
    <Table.Row role="row">
      <Tent>{tentName}</Tent>
      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>
      <Stacked>
        <span>
          {isToday(new Date(checkInDate))
            ? "Today"
            : formatDistanceFromNow(checkInDate)}{" "}
          &rarr; {numbNight} night stay
        </span>
        <span>
          {format(new Date(checkInDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(checkOutDate), "MMM dd yyyy")}
        </span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
      <Amount>{formatCurrency(totalprice)}</Amount>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<AiOutlineHdd />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<AiTwotoneDownSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                icon={<AiOutlineRollback />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open open="delBooking">
              <Menus.Button icon={<AiTwotoneDelete />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>{" "}
        <Modal.Window open="delBooking">
          <ConfirmDelete
            resource="booking"
            onConfirm={() => {
              delBooking(bookingId);
            }}
            disabled={deleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
BookingRow.propTypes = {
  booking: PropTypes.object,
  bookingId: PropTypes.number,
  checkInDate: PropTypes.func,
  checkOutDate: PropTypes.func,
  numbNight: PropTypes.number,
  totalprice: PropTypes.number,
  tentPrice: PropTypes.number,
  status: PropTypes.string,
  guestName: PropTypes.string,
  email: PropTypes.string,
  tentName: PropTypes.string,
};
export default BookingRow;
