"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const connectionDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionOptions = {
        name: (0, uuid_1.v4)(),
        type: process.env.DB_DRIVER,
        host: "bdhanpvrxc2eglowfksl-mysql.services.clever-cloud.com",
        port: 3306,
        username: "uou34iakpdpzp5ru",
        password: "77GqO0vl9OF46m9XhZKj",
        database: "bdhanpvrxc2eglowfksl",
        entities: [__dirname + "/../**/entity.*s"],
        synchronize: false,
    };
    const connection = new typeorm_1.DataSource(connectionOptions);
    yield connection.initialize();
    return connection;
});
exports.connectionDB = connectionDB;
