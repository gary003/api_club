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
exports.feedPagination = exports.deleteUserById = exports.saveNewUser = exports.getAllUsers = void 0;
const profile_1 = require("../../../infrastructure/persistance/profile");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, profile_1.getAllUsersDB)().catch((err) => {
        console.log(err);
        return null;
    });
    if (!allUsers)
        throw new Error(JSON.stringify("err - gatAll"));
    return allUsers;
});
exports.getAllUsers = getAllUsers;
const saveNewUser = (username, email, description, picture) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, profile_1.saveNewUserDB)(username, email, description, picture).catch((err) => {
        console.error(err);
        return null;
    });
    if (!newUser)
        throw new Error(JSON.stringify("ErrorCreatingUser"));
    return newUser;
});
exports.saveNewUser = saveNewUser;
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield (0, profile_1.deleteUserByIdDB)(userId).catch((err) => {
        console.error(err);
        return null;
    });
    if (!deletedUser)
        throw new Error(JSON.stringify("ErrorDeletingUser"));
    return deletedUser;
});
exports.deleteUserById = deleteUserById;
const feedPagination = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return true;
});
exports.feedPagination = feedPagination;
