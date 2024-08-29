import styled from "styled-components";

import { isToday } from "date-fns";
import { format } from "date-fns";

import PropTypes from "prop-types";

import {
  AiOutlineCheck,
  AiOutlineComment,
  AiOutlineDollar,
  AiOutlineMoon,
} from "react-icons/ai";

import { formatDistanceFromNow } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import { Flag } from "../../ui/Flag";
import DataItem from "../../ui/DataItem";

const StyledBookingDataBox = styled.section`
  padding: 2.6rem 2.2rem;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);

  padding: 1.5rem 2.4rem;
  color: #e0e7ff;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: Var(--color-orange-500);

  svg {
    height: 32px;
    width: 32px;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  & span {
    font-family: "Sono";
    font-size: 1.1rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3rem 3.5rem 1rem;
`;

const Guest = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-50)" : "var(--color-brown-50)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
  }

  svg {
    height: 32px;
    width: 32px;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    checkInDate,
    checkOutDate,
    numbNight,
    numbGuests,
    tentPrice,
    extrasPrice,
    totalprice,
    breakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestName,
      email,
      nationality,
      countryFlag,
      nationalID,
    },
    tents: { name: tentName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <AiOutlineMoon />
          <p>
            {numbNight} nights in tent <span>{tentName}</span>
          </p>
        </div>

        <p>
          {format(new Date(checkInDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(checkInDate))
            ? "Today"
            : formatDistanceFromNow(checkInDate)}
          ) &mdash; {format(new Date(checkOutDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && (
            <Flag src={countryFlag} alt={`Flag of ${nationality}`} />
          )}
          <p>
            {guestName} {numbGuests > 1 ? `+ ${numbGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem icon={<AiOutlineComment />} label="Observations">
            {observations}
          </DataItem>
        )}

        <DataItem icon={<AiOutlineCheck />} label="Breakfast included?">
          {breakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<AiOutlineDollar />} label={`Total price`}>
            {formatCurrency(totalprice)}

            {breakfast &&
              ` (${formatCurrency(tentPrice)} tent + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

BookingDataBox.propTypes = {
  booking: PropTypes.object,
  created_at: PropTypes.func,
  checkInDate: PropTypes.func,
  checkOutDate: PropTypes.func,
  numbNight: PropTypes.number,
  numbGuests: PropTypes.number,
  tentPrice: PropTypes.number,
  extrasPrice: PropTypes.number,
  totalprice: PropTypes.number,
  breakfast: PropTypes.bool,
  observations: PropTypes.string,
  isPaid: PropTypes.bool,
  guests: PropTypes.object,
  guestName: PropTypes.string,
  email: PropTypes.string,
  nationality: PropTypes.string,
  countryFlag: PropTypes.string,
  nationalID: PropTypes.number,
};
export default BookingDataBox;
