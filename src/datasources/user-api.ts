import { RESTDataSource } from '@apollo/datasource-rest';

class UserAPI extends RESTDataSource {
  baseURL = "http://localhost:8800/";

  getUsers() {
    return this.get("users");
  }

  getUser(id: number) {
    return this.get(`users/id/${id}`);
  }
}

export default UserAPI;