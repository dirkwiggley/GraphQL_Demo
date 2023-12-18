import { RESTDataSource } from '@apollo/datasource-rest';

class VideoAPI extends RESTDataSource {
  baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/"

  getVideos() {
    return this.get("videos.json");
  }

  getVideo(id: number) {
    return this.get(`videos/${id}.json`);
  }
}

export default VideoAPI;

