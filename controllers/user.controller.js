"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@overnightjs/core");
var http_status_codes_1 = require("http-status-codes");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.get = function (req, res) {
        console.log(req.params.id);
        return res.status(http_status_codes_1.OK);
    };
    UserController.prototype.add = function (req, res) { };
    __decorate([
        core_1.Get(':id')
    ], UserController.prototype, "get", null);
    __decorate([
        core_1.Post('add-user')
    ], UserController.prototype, "add", null);
    UserController = __decorate([
        core_1.Controller('api/users')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
