"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoListAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/";
    }
    getVideoLists() {
        return this.get("video_list.json");
    }
    getVideoList(id) {
        return this.get(`video_list/${id}.json`);
    }
}
exports.default = VideoListAPI;
