"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoInListAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/";
    }
    getVideosInList() {
        return this.get("video_in_list.json");
    }
    getVideoInList(id) {
        return this.get(`video_in_list/${id}.json`);
    }
}
exports.default = VideoInListAPI;
