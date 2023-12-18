import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
    videos: [Video!]!
    videoList: [VideoList]
    videoInList: [VideoInList]
  }

  type User {
    id: Int!
    login: String!
    nickname: String!
    videoList: VideoList
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