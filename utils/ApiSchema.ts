import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    hello: String
    movies: [Movie]
    popularMovies: [Movie]
    latestReleases: [Movie]
    upcomingMovies: [Movie]
    singleMovie(id: ID!): Movie
  }

  type Movie {
    id: ID!
    title: String
    imgUrl: String
    productionYear: Int
    sumOfRatings: Int
    numberOfRatings: Int
    description: String
    trailerUrl: String
    actors: [String]
    categories: [String]
    views: Int
  }
`;
