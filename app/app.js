"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('rootpath')();
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors = require('cors');
var bodyParser = require('body-parser');
var errorHandler = require('_helpers/error-handler');
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
    }
    return App;
}());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// api routes
app.use('/users', require('./users/users.controller'));
// global error handler
app.use(errorHandler);
