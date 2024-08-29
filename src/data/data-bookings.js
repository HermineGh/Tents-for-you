import { add } from "date-fns";

function fromToday(numbDays, withTime = false) {
  const date = add(new Date(), { days: numbDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // tent 001
  {
    created_at: fromToday(-20, true),
    checkInDate: fromToday(0),
    checkOutDate: fromToday(7),
    tentID: 1,
    guestID: 2,
    breakfast: true,
    observation:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    isPaid: false,
    numbGuests: 1,
  },
  {
    created_at: fromToday(-33, true),
    checkInDate: fromToday(-23),
    checkOutDate: fromToday(-13),
    tentID: 1,
    guestID: 3,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 2,
  },
  {
    created_at: fromToday(-27, true),
    checkInDate: fromToday(12),
    checkOutDate: fromToday(18),
    tentID: 1,
    guestID: 4,
    breakfast: false,
    observation: "",
    isPaid: false,
    numbGuests: 2,
  },

  // tent 002
  {
    created_at: fromToday(-45, true),
    checkInDate: fromToday(-45),
    checkOutDate: fromToday(-29),
    tentID: 2,
    guestID: 5,
    breakfast: false,
    observation: "",
    isPaid: true,
    numbGuests: 2,
  },
  {
    created_at: fromToday(-2, true),
    checkInDate: fromToday(15),
    checkOutDate: fromToday(18),
    tentID: 2,
    guestID: 6,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 2,
  },
  {
    created_at: fromToday(-5, true),
    checkInDate: fromToday(33),
    checkOutDate: fromToday(48),
    tentID: 2,
    guestID: 7,
    breakfast: true,
    observation: "",
    isPaid: false,
    numbGuests: 2,
  },

  // tent 003
  {
    created_at: fromToday(-65, true),
    checkInDate: fromToday(-25),
    checkOutDate: fromToday(-20),
    tentID: 3,
    guestID: 8,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 4,
  },
  {
    created_at: fromToday(-2, true),
    checkInDate: fromToday(-2),
    checkOutDate: fromToday(0),
    tentID: 3,
    guestID: 9,
    breakfast: false,
    observation: "We will be bringing our small dog with us",
    isPaid: true,
    numbGuests: 3,
  },
  {
    created_at: fromToday(-14, true),
    checkInDate: fromToday(-14),
    checkOutDate: fromToday(-11),
    tentID: 3,
    guestID: 10,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 4,
  },

  // tent 004
  {
    created_at: fromToday(-30, true),
    checkInDate: fromToday(-4),
    checkOutDate: fromToday(8),
    tentID: 4,
    guestID: 11,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 4,
  },
  {
    created_at: fromToday(-1, true),
    checkInDate: fromToday(12),
    checkOutDate: fromToday(17),
    tentID: 4,
    guestID: 12,
    breakfast: true,
    observation: "",
    isPaid: false,
    numbGuests: 4,
  },
  {
    created_at: fromToday(-3, true),
    checkInDate: fromToday(18),
    checkOutDate: fromToday(19),
    tentID: 4,
    guestID: 13,
    breakfast: false,
    observation: "",
    isPaid: true,
    numbGuests: 1,
  },

  // tent 005
  {
    created_at: fromToday(0, true),
    checkInDate: fromToday(14),
    checkOutDate: fromToday(21),
    tentID: 5,
    guestID: 14,
    breakfast: true,
    observation: "",
    isPaid: false,
    numbGuests: 5,
  },
  {
    created_at: fromToday(-6, true),
    checkInDate: fromToday(-6),
    checkOutDate: fromToday(-4),
    tentID: 5,
    guestID: 15,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 4,
  },
  {
    created_at: fromToday(-4, true),
    checkInDate: fromToday(-4),
    checkOutDate: fromToday(-1),
    tentID: 5,
    guestID: 16,
    breakfast: false,
    observation: "",
    isPaid: true,
    numbGuests: 6,
  },

  // tent 006
  {
    created_at: fromToday(-3, true),
    checkInDate: fromToday(0),
    checkOutDate: fromToday(11),
    tentID: 6,
    guestID: 17,
    breakfast: false,
    observation:
      "We will be checking in late, around midnight. Hope that's okay :)",
    isPaid: true,
    numbGuests: 6,
  },
  {
    created_at: fromToday(-16, true),
    checkInDate: fromToday(-16),
    checkOutDate: fromToday(-9),
    tentID: 6,
    guestID: 18,
    breakfast: true,
    observation: "I will need a rollaway bed for one of the guests",
    isPaid: true,
    numbGuests: 4,
  },
  {
    created_at: fromToday(-18, true),
    checkInDate: fromToday(-4),
    checkOutDate: fromToday(-1),
    tentID: 6,
    guestID: 19,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 6,
  },

  // tent 007
  {
    created_at: fromToday(-2, true),
    checkInDate: fromToday(17),
    checkOutDate: fromToday(23),
    tentID: 7,
    guestID: 20,
    breakfast: true,
    observation: "",
    isPaid: false,
    numbGuests: 8,
  },
  {
    created_at: fromToday(-7, true),
    checkInDate: fromToday(40),
    checkOutDate: fromToday(50),
    tentID: 7,
    guestID: 21,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 7,
  },
  {
    created_at: fromToday(-55, true),
    checkInDate: fromToday(32),
    checkOutDate: fromToday(37),
    tentID: 7,
    guestID: 22,
    breakfast: true,
    observation: "",
    isPaid: true,
    numbGuests: 6,
  },

  // tent 008
  {
    created_at: fromToday(-8, true),
    checkInDate: fromToday(-5),
    checkOutDate: fromToday(0),
    tentID: 8,
    guestID: 1,
    breakfast: true,
    observation:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    isPaid: true,
    numbGuests: 9,
  },
  {
    created_at: fromToday(0, true),
    checkInDate: fromToday(0),
    checkOutDate: fromToday(5),
    tentID: 8,
    guestID: 23,
    breakfast: true,
    observation:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    isPaid: true,
    numbGuests: 10,
  },
  {
    created_at: fromToday(-10, true),
    checkInDate: fromToday(10),
    checkOutDate: fromToday(13),
    tentID: 8,
    guestID: 24,
    breakfast: false,
    observation: "",
    isPaid: true,
    numbGuests: 7,
  },
];