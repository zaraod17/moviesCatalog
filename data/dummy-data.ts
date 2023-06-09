import { MoviesListElementProps } from "../components/MoviesList/MoviesListElement/MoviesListElement.types";

type Movies = MoviesListElementProps[];

export const DUMMY_MOVIES: Movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    imgUrl:
      "https://resizing.flixster.com/nMPTDzWsB7Z44LSCJFlAzB7LuMY=/300x300/v2/https://flxt.tmsimg.com/assets/p15987_k_h9_ac.jpg",
    productionYear: 1994,
    numberOfRatings: 1500,
    sumOfRatings: 7500,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://youtube.com/embed/6hB3S9bIaco",
    actors: [
      "Morgan Freeman",
      "Tim Robins",
      "Clancy Brown",
      "Bob Gunton",
      "William Sadler",
    ],
    categories: ["drama", "crime"],
  },
  {
    id: 2,
    title: "The Godfather",
    imgUrl:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/The-Godfather.jpg",
    productionYear: 1972,
    numberOfRatings: 1800,
    sumOfRatings: 9000,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailerUrl: "https://youtube.com/embed/sY1S34973zA",
    actors: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano",
      "Robert Duvall",
    ],
    categories: ["drama", "crime"],
  },
  {
    id: 3,
    title: "Pulp Fiction",
    imgUrl:
      "https://static.prsa.pl/images/d79b2f79-f189-409c-8d17-8d2f3c9f0b91.jpg?format=500",
    productionYear: 1994,
    numberOfRatings: 2100,
    sumOfRatings: 10500,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    trailerUrl: "https://youtube.com/embed/s7EdQ4FqbhY",
    actors: [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Harvey Keitel",
      "Tim Roth",
    ],
    categories: ["crime", "thriller"],
  },
  {
    id: 4,
    title: "The Dark Knight",
    imgUrl:
      "https://i0.wp.com/batman-news.com/wp-content/uploads/2012/08/batman-bane-the-dark-knight-rises.jpg?fit=1280%2C1015&quality=80&strip=info&ssl=1",
    productionYear: 2008,
    numberOfRatings: 2300,
    sumOfRatings: 11500,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailerUrl: "https://youtube.com/embed/kmJLuwP3MbY",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
    ],
    categories: ["action", "crime", "drama"],
  },
  {
    id: 5,
    title: "Forrest Gump",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMHXtH3Mwa1wEp1SUSS3HYRICq12FhSukCA&usqp=CAU",
    productionYear: 1994,
    numberOfRatings: 1900,
    sumOfRatings: 9500,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    trailerUrl: "https://youtube.com/embed/bLvqoHBptjg",
    actors: [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Sally Field",
      "Haley Joel Osment",
    ],
    categories: ["drama", "romance", "comedy"],
  },
  {
    id: 6,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPNz6mKYmeeKmLvvi8S0HS2XKXrQq60ygXQ&usqp=CAU",
    productionYear: 1980,
    numberOfRatings: 1700,
    sumOfRatings: 8500,
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    trailerUrl: "https://youtube.com/embed/JNwNXF9Y6kY",
    actors: [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams",
      "Anthony Daniels",
    ],
    categories: ["action", "adventure", "sf"],
  },
  {
    id: 7,
    title: "The Shawshank Redemption",

    imgUrl:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/09/ShawshankRedempt_184Pyxurz.jpg",
    productionYear: 1994,
    numberOfRatings: 3000,
    sumOfRatings: 15000,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://youtube.com/embed/6hB3S9bIaco",
    actors: [
      "Morgan Freeman, Tim Robins, Clancy Brown",
      "Bob Gunton",
      "William Sadler",
    ],
    categories: ["drama", "crime"],
  },
  {
    id: 8,
    title: "The Matrix",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sO3Wxs1Zo8eWxnu3P1LPi3nOJyy6BDaXSg&usqp=CAU",
    productionYear: 1999,
    numberOfRatings: 2200,
    sumOfRatings: 11000,
    description:
      "A computer programmer discovers that his reality is not what it seems, and he joins a group of rebels to fight against the machines that control humanity.",
    trailerUrl: "https://youtube.com/embed/m8e-FF8MsqU",
    actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
      "Gloria Foster",
    ],
    categories: ["sf", "action", "thriller"],
  },
  {
    id: 9,
    title: "Inception",
    imgUrl:
      "https://static01.nyt.com/images/2010/07/16/arts/16inceptioncap/16inceptioncap-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    productionYear: 2010,
    numberOfRatings: 2500,
    sumOfRatings: 12500,
    description:
      "A skilled thief who steals information by infiltrating the subconscious mind is given a chance to have his criminal history erased if he can successfully plant an idea in a target's mind.",
    trailerUrl: "https://youtube.com/embed/YoHD9XEInc0",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
      "Ken Watanabe",
    ],
    categories: ["action", "thriller"],
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTE1NDY4NV5BMl5BanBnXkFtZTcwMzkwMjk2Mw@@._V1_.jpg",
    productionYear: 2001,
    numberOfRatings: 2000,
    sumOfRatings: 10000,
    description:
      "A young hobbit and his companions set out on a journey to destroy a powerful ring and save Middle-earth from the Dark Lord Sauron.",
    trailerUrl: "https://youtube.com/embed/V75dMMIW2B4",
    actors: [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Sean Astin",
      "Orlando Bloom",
    ],
    categories: ["action", "fantasy", "adventure"],
  },
];

export const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
