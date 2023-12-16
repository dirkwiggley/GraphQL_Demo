"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        // returns an array of users
        users: (_, __, { dataSources }) => {
            return dataSources.userAPI.getUsers();
        },
        videos: (_, __, { dataSources }) => {
            return dataSources.videoAPI.getVideos();
        },
        videoList: (_, __, { dataSources }) => {
            return dataSources.videoListAPI.getVideoLists();
        },
        videoInList: (_, __, { dataSources }) => {
            return dataSources.videoInListAPI.getVideosInList();
        }
    },
};
