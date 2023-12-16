"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `
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
`;
