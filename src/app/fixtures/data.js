export const cinemas = [
  {
    id: 1,
    name: "Dendy Cinemas",
    location: "Newtown",
    openingHours: "9am-10pm"
  },
  {
    id: 2,
    name: "Palace Cinemas",
    location: "Central Park",
    openingHours: "10am-10pm"
  },
  {
    id: 3,
    name: "Event Cinemas",
    location: "George Street",
    openingHours: "10am-12am"
  }
];

export const movies = [
  {
    id: 1,
    title: "Lost in Translation",
    genre: "Drama"
  },
  {
    id: 2,
    title: "What We Do in the Shadows",
    genre: "Comedy"
  },
  {
    id: 3,
    title: "Her",
    genre: "Romance"
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller"
  },
  {
    id: 5,
    title: "Interstellar",
    genre: "Sci-fi/Drama"
  },
  {
    id: 6,
    title: "Whiplash",
    genre: "Drama"
  }
];

export const showings = [
  {
    id: 1,
    cinemaId: 1,
    movieId: 1,
    times: ["10:00", "13:00", "18:00"]
  },
  {
    id: 2,
    cinemaId: 1,
    movieId: 3,
    times: ["12:00", "15:00"]
  },
  {
    id: 3,
    cinemaId: 1,
    movieId: 4,
    times: ["14:00"]
  },
  {
    id: 4,
    cinemaId: 2,
    movieId: 2,
    times: ["11:00", "15:00"]
  },
  {
    id: 5,
    cinemaId: 2,
    movieId: 5,
    times: ["13:00"]
  },
  {
    id: 6,
    cinemaId: 2,
    movieId: 6,
    times: ["17:00"]
  },
  {
    id: 7,
    cinemaId: 3,
    movieId: 3,
    times: ["10:00", "15:00"]
  },
  {
    id: 8,
    cinemaId: 3,
    movieId: 5,
    times: ["12:00", "20:00"]
  },
  {
    id: 9,
    cinemaId: 3,
    movieId: 6,
    times: ["14:00", "17:00"]
  }
];
