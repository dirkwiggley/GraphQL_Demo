"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class VideoAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "http://localhost:8800/";
    }
    getVideos() {
        return this.get("videos");
    }
    getVideo(id) {
        return this.get(`videos/id/${id}`);
    }
}
exports.default = VideoAPI;
