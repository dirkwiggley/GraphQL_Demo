import { RESTDataSource } from '@apollo/datasource-rest';

class VideoInListAPI extends RESTDataSource {
  baseURL = "http://localhost:8800/";

  getVideosInList() {
    return this.get("video_in_list");
  }

  getVideoInList(id: number) {
    return this.get(`video_in_list/id/${id}`);
  }
}

export default VideoInListAPI;