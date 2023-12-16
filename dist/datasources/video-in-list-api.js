"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoInListAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "http://localhost:8800/";
    }
    getVideosInList() {
        return this.get("video_in_list");
    }
    getVideoInList(id) {
        return this.get(`video_in_list/id/${id}`);
    }
}
exports.default = VideoInListAPI;
