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
const express_1 = require("express");
const index_1 = require("../../services/user/index");
const userRouter = (0, express_1.Router)();
userRouter
    .route("/")
    .get((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, index_1.getAllUsers)().catch((err) => {
        console.error(err);
        return null;
    });
    if (!results)
        return res.status(500).json("errorAPIGetAllUsers");
    return res.status(200).json(results);
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, descrption, picture } = req.body;
    const result = yield (0, index_1.saveNewUser)(username, email, descrption, picture).catch((err) => {
        console.error(err);
        return null;
    });
    if (!result)
        return res.status(500).json("errorAPIUserCreation");
    return res.status(200).json(result);
}));
exports.default = userRouter;
