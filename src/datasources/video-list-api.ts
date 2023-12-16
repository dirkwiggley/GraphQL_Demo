import { RESTDataSource } from '@apollo/datasource-rest';

class VideoListAPI extends RESTDataSource {
  baseURL = "http://localhost:8800/";

  getVideoLists() {
    return this.get("video_list");
  }

  getVideoList(id: number) {
    return this.get(`video_list/id/${id}`);
  }
}

export default VideoListAPI;