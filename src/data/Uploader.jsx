import supabase from "../services/supabase";
import styled from "styled-components";

import { useState } from "react";

import { isFuture, isPast, isToday } from "date-fns";
import { tents } from "./data-tents";

import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";
import { bookings } from "./data-bookings";

const StyledUploader = styled.div`
  margin: 50px 60px 20px;
  background-color: var(--color-orange-200);
  padding: 16px 16px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
`;
const H3 = styled.h3`
  font-size: 1rem;
  color: var(--color-orange-500);
  margin-bottom: 8px;
`;
async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guestID and a tentID. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIDs and tentIDs, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIDs = guestsIds.map((tents) => tents.id);
  const { data: tentIDs } = await supabase
    .from("tents")
    .select("id")
    .order("id");
  const allTentIDs = tentIDs.map((tents) => tents.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of tents, as they don't have and ID yet
    const tent = tents.at(booking.tentID - 1);
    const numbNight = subtractDates(booking.checkOutDate, booking.checkInDate);

    // const tentPrice = numbNight * (tents.price - tents.discount);
    const tentPrice = numbNight * (tent.price - tent.discount);
    const extrasPrice = booking.breakfast
      ? numbNight * 35 * booking.numbGuests
      : 0; // hardcoded breakfast price

    const totalprice = tentPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.checkOutDate)) &&
      !isToday(new Date(booking.checkOutDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.checkInDate)) ||
      isToday(new Date(booking.checkInDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.checkOutDate)) ||
        isToday(new Date(booking.checkOutDate))) &&
      isPast(new Date(booking.checkInDate)) &&
      !isToday(new Date(booking.checkInDate))
    )
      status = "checked-in";

    return {
      ...booking,
      numbNight,
      tentPrice,
      extrasPrice,
      totalprice,
      guestID: allGuestIDs.at(booking.guestID - 1),
      tentID: allTentIDs.at(booking.tentID - 1),
      status,
    };
  });

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <StyledUploader>
      <H3>Sample Data</H3>
      <Button onClick={uploadBookings} disabled={isLoading} size="small">
        Upload bookings
      </Button>
    </StyledUploader>
  );
}

export default Uploader;
