import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from './resolvers/resolvers';
import UserAPI from "./datasources/user-api";
import VideoAPI from "./datasources/video-api";
import VideoListAPI from "./datasources/video-list-api";
import VideoInListAPI from "./datasources/video-in-list-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          userAPI: new UserAPI(),
          videoAPI: new VideoAPI(),
          videoListAPI: new VideoListAPI(),
          videoInListAPI: new VideoInListAPI()
        }
      }
    }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
