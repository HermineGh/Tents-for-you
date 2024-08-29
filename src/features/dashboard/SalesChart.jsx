import styled from "styled-components";

import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

import PropTypes from "prop-types";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useDarkMode } from "../../context/DarkModeContext";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numbDays }) {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#E39859", fill: "#fda45e" },
        extrasSales: { stroke: "#8F9276", fill: "#676C55" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#fb923c", fill: "#fda45e" },
        extrasSales: { stroke: "#16a34a", fill: "#b4ceaa" },
        text: "#374151",
        background: "#fff",
      };
  /*The graph should have an entry for each day, regardless of whether there was a booking on that day or not. To do this, we need an array with a single object with the following structure for each: day { label: "Feb 06", totalSales: 1450, extrasSales: 400  */

  // To get an array of dates in a given interval
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numbDays - 1), //subtracts the given number of days from the given date, returns the new date
    end: new Date(),
  });
  //Based on the array of dates, get the array date, which will contain objects with the above structure
  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((sum, el) => sum + el.totalprice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((sum, el) => sum + el.extrasPrice, 0),
    };
  });

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}{" "}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis unit="$" />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            fillOpacity={0.7}
            unit="$"
            name="Total sales"
            strokeWidth={2}
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            fillOpacity={0.8}
            unit="$"
            name="Extras sales"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}
SalesChart.propTypes = {
  bookings: PropTypes.array,
  numbDays: PropTypes.number,
};
export default SalesChart;
