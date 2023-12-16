"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoListAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "http://localhost:8800/";
    }
    getVideoLists() {
        return this.get("video_list");
    }
    getVideoList(id) {
        return this.get(`video_list/id/${id}`);
    }
}
exports.default = VideoListAPI;
