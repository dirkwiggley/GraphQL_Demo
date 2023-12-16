import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get all users"
    users: [User!]!
    videos: [Video!]!
    videoList: [VideoList]
    videoInList: [VideoInList]
  }

  type User {
    id: Int!
    login: String!
    nickname: String!
  }

  type Video {
    id: Int!
    name: String!
    desc: String!
    url: String!
  }

  type VideoList {
    id: Int!
    name: String!
    user_id: Int!
  }

  type VideoInList {
    id: Int!
    list_id: Int!
    video_id: Int!
  }
`