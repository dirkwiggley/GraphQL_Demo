import { Resolvers } from "../types";
import admin, { ServiceAccount } from "firebase-admin";

type ParentType = {
  id: number
}

export const resolvers: Resolvers = {
  Query: {
    users: (_, __, {dataSources}) => {
      return dataSources.userAPI.getUsers();
    },
    user: (parent, args, {dataSources}) => {
      return dataSources.userApi.getUser(args.id)
    },
    videos: (_, __, {dataSources}) => {
      return dataSources.videoAPI.getVideos();
    },
    videoList: (parent, __, {dataSources}) => {
      const lists =  dataSources.videoListAPI.getVideoLists();
      const parentId  = (parent as ParentType)?.id;
      if (parentId) {
        console.log(`parentId = ${parentId}`);
        return lists.filter(list => { list.user_id === parentId});
      }
      console.log(JSON.stringify(lists));
      return lists;
    },
    // videoList: (_, __, {dataSources}) => {
    //   return dataSources.videoListAPI.getVideoLists();
    // },
    videoInList: (_, __, {dataSources}) => {
      return dataSources.videoInListAPI.getVideosInList();
    }
  },
};
