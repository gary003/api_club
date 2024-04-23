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
exports.deleteUserByIdDB = exports.saveNewUserDB = exports.getAllUsersDB = void 0;
const connectionFile_1 = require("../connection/connectionFile");
const entity_1 = require("./entity");
const getAllUsersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, connectionFile_1.connectionDB)();
    const ProfileRepository = connection.getRepository(entity_1.Profile);
    const result = yield ProfileRepository.createQueryBuilder("profile")
        .getMany()
        .catch((err) => {
        console.log(err);
        return null;
    });
    yield connection.destroy();
    if (!result)
        throw new Error("Impossible to retreive any user");
    // logger.debug(JSON.stringify(result))
    return result;
});
exports.getAllUsersDB = getAllUsersDB;
const saveNewUserDB = (username, email, description, picture) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new entity_1.Profile();
    newUser.username = username;
    newUser.email = email;
    newUser.description = description;
    newUser.picture = picture;
    return newUser;
});
exports.saveNewUserDB = saveNewUserDB;
const deleteUserByIdDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, connectionFile_1.connectionDB)();
    const ProfileRepository = connection.getRepository(entity_1.Profile);
    const deletedUser = yield ProfileRepository.delete(userId).catch((err) => {
        return null;
    });
    if (!deletedUser || deletedUser.affected === 0) {
        yield connection.destroy();
        throw new Error("Impossible to delete the user in DB (step : 2)");
    }
    yield connection.destroy();
    return true;
});
exports.deleteUserByIdDB = deleteUserByIdDB;
