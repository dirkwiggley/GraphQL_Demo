"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class UserAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://graphql-test-34dd7-default-rtdb.firebaseio.com/";
    }
    getUsers() {
        return this.get("users.json");
    }
    getUser(id) {
        return this.get(`users/${id}.json`);
    }
}
exports.default = UserAPI;
