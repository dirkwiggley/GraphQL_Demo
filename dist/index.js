"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers/resolvers");
const user_api_1 = __importDefault(require("./datasources/user-api"));
const video_api_1 = __importDefault(require("./datasources/video-api"));
const video_list_api_1 = __importDefault(require("./datasources/video-list-api"));
const video_in_list_api_1 = __importDefault(require("./datasources/video-in-list-api"));
async function startApolloServer() {
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            return {
                dataSources: {
                    userAPI: new user_api_1.default(),
                    videoAPI: new video_api_1.default(),
                    videoListAPI: new video_list_api_1.default(),
                    videoInListAPI: new video_in_list_api_1.default()
                }
            };
        }
    });
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
