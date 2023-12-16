"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class UserAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "http://localhost:8800/";
    }
    getUsers() {
        return this.get("users");
    }
    getUser(id) {
        return this.get(`users/id/${id}`);
    }
}
exports.default = UserAPI;
