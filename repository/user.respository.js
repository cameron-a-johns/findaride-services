"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.Client = new pg_1.Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true
        });
    }
    return UserRepository;
}());
exports.UserRepository = UserRepository;
