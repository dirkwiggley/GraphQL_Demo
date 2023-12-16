import { RESTDataSource } from '@apollo/datasource-rest';

class VideoAPI extends RESTDataSource {
  baseURL = "http://localhost:8800/";

  getVideos() {
    return this.get("videos");
  }

  getVideo(id: number) {
    return this.get(`videos/id/${id}`);
  }
}

export default VideoAPI;