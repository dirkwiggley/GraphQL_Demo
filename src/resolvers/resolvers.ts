import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of users
    users: (_, __, {dataSources}) => {
      return dataSources.userAPI.getUsers();
    },
    videos: (_, __, {dataSources}) => {
      return dataSources.videoAPI.getVideos();
    },
    videoList: (_, __, {dataSources}) => {
      return dataSources.videoListAPI.getVideoLists();
    },
    videoInList: (_, __, {dataSources}) => {
      return dataSources.videoInListAPI.getVideosInList();
    }
  },
};