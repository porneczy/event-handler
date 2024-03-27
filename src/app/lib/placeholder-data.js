const events = [
  {
    id: "1",
    start: "2023-10-10T10:00:00Z",
    title: "Reggeli meeting",
    finish: "2023-10-10T12:00:00Z",
    photo: {
      id: "1",
    },
  },
  {
    id: "2",
    start: "2023-10-10T13:00:00Z",
    title: "Torna",
    finish: "2023-10-10T15:00:00Z",
    photo: null,
  },
  {
    id: "3",
    start: "2023-10-10T14:00:00Z",
    title: "Planning",
    finish: "2023-10-10T17:00:00Z",
    photo: {
      id: "3",
    },
  },
];

const event = {
  start: "2023-10-10T10:00:00Z",
  title: "Reggeli meeting",
  finish: "2023-10-10T12:00:00Z",
  description: "Ez egy példa Reggeli meeting esemény leírása.",
  location: {
    name: "Várkert bazár",
  },
  photo: {
    id: "1",
  },
};

module.exports = {
  events,
  event
}