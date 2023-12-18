import { RESTDataSource } from '@apollo/datasource-rest';

class UserAPI extends RESTDataSource {
  baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/"

  getUsers() {
    return this.get("users.json");
  }

  getUser(id: number) {
    return this.get(`users/${id}.json`);
  }
}

export default UserAPI;