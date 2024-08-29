import PropTypes from "prop-types";

import {
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineMoneyCollect,
  AiOutlineSchedule,
} from "react-icons/ai";
import Statistic from "./Statistic";
import { formatCurrency } from "../../utils/helpers";

function Statistics({ bookings, confirmedStays }) {
  const numbBooking = bookings.length;

  const staysPrice = bookings.reduce((sum, el) => sum + el.totalprice, 0);

  const stays = confirmedStays.length;

  const staysNights = confirmedStays.reduce(
    (sum, night) => sum + night.numbNight,
    0
  );

  return (
    <>
      <Statistic
        title="Bookings"
        color="orange"
        icon={<AiOutlineBook />}
        value={numbBooking}
      />
      <Statistic
        title="Sales"
        color="green"
        icon={<AiOutlineMoneyCollect />}
        value={formatCurrency(staysPrice)}
      />
      <Statistic
        title="Check-ins"
        color="yellow"
        icon={<AiOutlineSchedule />}
        value={stays}
      />
      <Statistic
        title="Occupancy"
        color="brown"
        icon={<AiOutlineBarChart />}
        value={Math.round(staysNights) + "%"}
      />
    </>
  );
}
Statistics.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
};
export default Statistics;
