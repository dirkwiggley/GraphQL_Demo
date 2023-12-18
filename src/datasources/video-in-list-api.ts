import { RESTDataSource } from '@apollo/datasource-rest';

class VideoInListAPI extends RESTDataSource {
  baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/"

  getVideosInList() {
    return this.get("video_in_list.json");
  }

  getVideoInList(id: number) {
    return this.get(`video_in_list/${id}.json`);
  }
}

export default VideoInListAPI;