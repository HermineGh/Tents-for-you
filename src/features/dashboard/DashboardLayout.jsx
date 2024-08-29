import styled from "styled-components";

import { useLastBookings } from "./useLastBookings";
import { useLastStays } from "./useLastStays";
import { useTents } from "../tents/useTents";

import Spinner from "../../ui/Spinner";
import Statistics from "./Statistics";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 24rem auto;
  gap: 1.5rem;
`;

function DashboardLayout() {
  const { isLoading, bookingDate } = useLastBookings();
  const { staysLoading, staysDate, numbDays } = useLastStays();
  const { isLoading: tentsLoading, tentsData } = useTents();

  if (staysLoading || isLoading || tentsLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Statistics
        bookings={bookingDate}
        numbDays={numbDays}
        confirmedStays={staysDate}
        tents={tentsData}
      />
      <TodayActivity />
      <DurationChart confirmedStays={staysDate} />
      <SalesChart bookings={bookingDate} numbDays={numbDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
