"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/";
    }
    getVideos() {
        return this.get("videos.json");
    }
    getVideo(id) {
        return this.get(`videos/${id}.json`);
    }
}
exports.default = VideoAPI;
