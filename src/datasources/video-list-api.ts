import { RESTDataSource } from '@apollo/datasource-rest';

class VideoListAPI extends RESTDataSource {
  baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/";

  getVideoLists() {
    return this.get("video_list.json");
  }

  getVideoList(id: number) {
    return this.get(`video_list/${id}.json`);
  }
}

export default VideoListAPI;